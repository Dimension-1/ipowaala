import { NextResponse } from 'next/server';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  try {
    const headers = {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://www.nseindia.com/companies-listing/public-issues-upcoming',
      'Origin': 'https://www.nseindia.com',
      'Connection': 'keep-alive',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'DNT': '1',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    };

    // First get the cookies from the main page
    const cookieResponse = await fetch('https://www.nseindia.com/companies-listing/public-issues-upcoming', {
      headers: headers,
      cache: 'no-store'
    });

    const cookies = cookieResponse.headers.get('set-cookie');
    
    // Wait for a short time to avoid rate limiting
    await delay(1000);

    // Add cookies to headers for the actual API call
    const apiHeaders = {
      ...headers,
      'Cookie': cookies
    };

    const response = await fetch('https://www.nseindia.com/api/all-upcoming-issues?category=ipo', {
      headers: apiHeaders,
      credentials: 'include',
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    // Return static data as fallback
    return NextResponse.json([
      {
        companyName: "Carraro India",
        issueStartDate: "20-December-2024",
        issueEndDate: "24-December-2024",
        issuePrice: "668-704 Rs",
        status: "active"
      },
      // Add more static data as needed
    ]);
  }
}
