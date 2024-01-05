const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });
 
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}


export async function sendMail(subject, body, mutationId = 'contact') {
    const fromAddress = 'alexeyy@next-wordpress.com';
    const toAddress = 'fedorov.kav17@gmail.com';
    const data = await fetchAPI(
      ` mutation SendEmail($input: SendEmailInput = {}) {
        sendEmail(input: $input) {
          message
          origin
          sent
        }
      }
      `, {     
        variables: {
          input: {
            clientMutationId: mutationId,
            from: fromAddress,
            to: toAddress,
            body: body,
            subject: subject,
          },
        },
      }
    );
    
  
    return data?.sendEmail;
  }