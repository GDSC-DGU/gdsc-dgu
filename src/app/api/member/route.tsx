import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

async function queryAllMemberData(): Promise<any[]> {
  // 📌 DB에 데이터를 추가할때와는 다르게 pages.create가 아닌 database.query를 사용
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_MEMBER_DATABASE_ID || '',
    });
    return response.results;
  } catch (error) {
    console.error(JSON.stringify(error));
    throw error;
  }
}

export async function GET(req: NextRequest) {
  try {
    const data = await queryAllMemberData();
    // 📌 response.results 반환
    return new Response(JSON.stringify({ data, message: 'Success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: `Failed: ${error?.toString()}` }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
