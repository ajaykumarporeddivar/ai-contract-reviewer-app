export async function GET() {
  return new Response(
    JSON.stringify({
      contractIntake: [
        {
          id: 1,
          contractId: 1,
          date: '2024-01-01',
          details: 'Contract intake details',
        },
        {
          id: 2,
          contractId: 2,
          date: '2024-01-15',
          details: 'Contract intake details',
        },
        {
          id: 3,
          contractId: 3,
          date: '2024-02-01',
          details: 'Contract intake details',
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