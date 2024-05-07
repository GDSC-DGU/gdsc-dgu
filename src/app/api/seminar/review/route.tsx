import { Client } from '@notionhq/client';
import { NextRequest } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

// seminar id와 연결된 리뷰 불러오기
async function queryReviewData(databaseId: string, seminarId: string): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Seminar',
        relation: {
          contains: seminarId
        }
      }
    });

    return response.results; 
  } catch (error) {
    console.error('Error querying Notion database by Seminar ID:', error);
    throw error;
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const seminarId = url.searchParams.get('seminarId');  // 쿼리 파라미터에서 세미나 ID 가져오기

  if (!seminarId) {
    return new Response(JSON.stringify({ message: 'Seminar ID is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const databaseId = process.env.NOTION_REVIEW_DATABASE_ID || '';  // 리뷰 데이터베이스 ID

  try {
    const reviews = await queryReviewData(databaseId, seminarId);
    return new Response(JSON.stringify({ reviews, message: 'Success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: `Failed: ${error?.toString()}` }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}