import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const headers = {
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
      'Referer': 'https://www.nseindia.com',
      'Origin': 'https://www.nseindia.com',
      'Connection': 'keep-alive'
    };

    // First get the cookies from the main page
    const cookieResponse = await fetch('https://www.nseindia.com', {
      headers: headers
    });

    const cookies = cookieResponse.headers.get('set-cookie');
    
    // Add cookies to headers for the actual API call
    const apiHeaders = {
      ...headers,
      'Cookie': cookies
    };

    const response = await fetch('https://www.nseindia.com/api/public-past-issues', {
      headers: apiHeaders,
      credentials: 'include'
    });

    const data = await response.json();
    
    // Filter past IPOs (those with listing dates that have passed)
    const today = new Date();
    const pastIPOs = data.data.filter(ipo => {
      const listingDate = new Date(ipo.listingDate.replace(/-/g, ' '));
      return listingDate < today && ipo.listingDate !== '-';
    });

    // Sort by listing date in descending order
    pastIPOs.sort((a, b) => {
      const dateA = new Date(a.listingDate.replace(/-/g, ' '));
      const dateB = new Date(b.listingDate.replace(/-/g, ' '));
      return dateB - dateA;
    });

    return NextResponse.json({
      data: pastIPOs,
      total: pastIPOs.length
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      data: [],
      total: 0
    });
  }
}
