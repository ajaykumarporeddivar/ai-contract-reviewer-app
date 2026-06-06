export async function GET() {
  return new Response(
    JSON.stringify({
      contracts: [
        {
          id: 1,
          name: 'Contract 1',
          status: 'pending',
          priority: 'high',
        },
        {
          id: 2,
          name: 'Contract 2',
          status: 'in_progress',
          priority: 'medium',
        },
        {
          id: 3,
          name: 'Contract 3',
          status: 'completed',
          priority: 'low',
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