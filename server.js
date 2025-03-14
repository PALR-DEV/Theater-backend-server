import Fastify from 'fastify'
import 'dotenv/config';
import nodemailer from 'nodemailer'
import { ticketTemplate } from './Functions/emailTemplate.js'
import { generateQRCode, saveQRCodeToStorage } from './Functions/generateTicket.js'
import { createPaymentIntent } from './Functions/createPaymentIntent.js';

const fastify = Fastify({
  logger: true
})

const API_KEY = 'your-super-secret-key-here'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // or your SMTP host
  port: 465,
  secure: true,
  auth: {
    user: 'pedroalorenzo16@gmail.com',
    pass: 'rcvq uqat civd ryej'
  }
})


// fastify.addHook('onRequest', async(request, reply) => {
//   const authHeader = request.headers.authorization;
//   if(!authHeader) {
//     reply.code(401).send({
//       message: 'Unauthorized header missing'
//     })
//     return;
//   } 

//   if(authHeader !== API_KEY) {
//     reply.code(401).send({
//       message: 'Invalid Key'
//     })
//     return;
//   }
// })

fastify.get('/', async function handler (request, reply) {
  return {message: 'Welcome to the movie theater API'}

})


fastify.post('/api/create-payment-intent', async function handler (request, reply) {
  const {amount} = request.body;
  if(!amount) {
    reply.code(400).send({
      message: 'Invalid amount'
    })
    return;
  }

  try {
    const paymentIntent = await createPaymentIntent(amount);

    reply.code(200).send({
      clientSecret: paymentIntent.clientSecret
    })

  } catch (error) {
    throw error;
    
  }
})



fastify.post('/api/send-email', async function handler (request, reply) {
  const {ticket} = request.body;
  const createQRCode = await generateQRCode(ticket.ticketId);
  const qrCode = createQRCode.toString('base64');
  const qrimageUrl = await saveQRCodeToStorage(createQRCode, ticket.ticketId);

  //i need 
  if(!ticket) {
    reply.code(400).send({
      message: 'Invalid ticket body '
    })
    return;
  }

  try {
    await transporter.sendMail({
      from:'Movie Theater pedroalorenzo16@gmail.com',
      to: 'pedroalorenzo16@gmail.com',
      subject:'Your Movie Ticket',
      text: 'Your ticket details',
      html: ticketTemplate(ticket, qrimageUrl)
    })

    reply.code(200).send({
      message: 'Email sent successfully'
    })
    
  } catch (error) {
    fastify.log.error(error);
    reply.code(500).send({
      message: 'failed to send email',
      error:error.message
    })
  }
  // send email
  
})


try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
