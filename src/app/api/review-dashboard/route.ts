export async function GET() {
  return new Response(
    JSON.stringify({
      reviewDashboard: [
        {
          id: 1,
          contractId: 1,
          reviewDate: '2024-01-01',
          reviewer: 'John Doe',
          status: 'pending',
        },
        {
          id: 2,
          contractId: 2,
          reviewDate: '2024-01-15',
          reviewer: 'Jane Doe',
          status: 'in_progress',
        },
        {
          id: 3,
          contractId: 3,
          reviewDate: '2024-02-01',
          reviewer: 'Bob Smith',
          status: 'completed',
        },
      ],
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}