/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

/* -------------------------------------------------------------------------- */
/*                                 SET API KEY                                */
/* -------------------------------------------------------------------------- */

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

/* -------------------------------------------------------------------------- */
/*                                  FUNCTION                                  */
/* -------------------------------------------------------------------------- */

/**
 * Send email to pcaratini@icloud.com
 * Data comes from Contact.tsx file
 *
 * @param req
 * @param res
 */
async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  /* ------------------------------- SET MESSAGE ------------------------------ */
  const msg = {
    name: "Paulin Caratini",
    to: "pcaratini@icloud.com", // Change to your recipient
    from: "p.caratini@outlook.fr", // Change to your verified sender
    subject: "Demande de contact",
    html: `<!DOCTYPE html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New mail from ${req.body.fullname}</title>
      <meta name="description" content="This email has been sent from haftwald.com">
    </head>
    
    <body style="margin: 0; padding: 0; background-color: #3845de">
      <div style="width: 70%; min-width: 400px; max-width: 800px; margin-left: auto; margin-right: auto; margin-top: 50px; padding: 30px; background-color: #ffffff; color: #000000">
        <h1>Nouveau message de Haftwald</h1>
        <h2>${req.body.fullname}</h2>
        <h3>${req.body.email}</h3>
        <p>${req.body.message}</p>
      </div>
    </body>
    </html>`,
  };

  /* ------------------------------ SEND MESSAGE ------------------------------ */
  sendgrid
    .send(msg)
    .then(() => {
      return res.json({ message: `Email has been sent` });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
}

/* -------------------------------------------------------------------------- */
/*                               EXPORT FUNCTION                              */
/* -------------------------------------------------------------------------- */

export default sendEmail;
