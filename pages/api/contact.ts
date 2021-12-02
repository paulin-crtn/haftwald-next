/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

/* -------------------------------------------------------------------------- */
/*                                SET PASSWORD                                */
/* -------------------------------------------------------------------------- */
const password = process.env.EMAIL_PASSWORD;

/* -------------------------------------------------------------------------- */
/*                                  FUNCTION                                  */
/* -------------------------------------------------------------------------- */

/**
 * Send email to contact@haftwald.com
 * Data comes from ModalContact.tsx file
 *
 * @param req
 * @param res
 */
async function contact(req: NextApiRequest, res: NextApiResponse) {
  /* ----------------------------- SET CREDENTIALS ---------------------------- */
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.privateemail.com",
    auth: {
      user: "contact@haftwald.com",
      pass: password,
    },
    secure: true,
  });

  /* ----------------------------- SET EMAIL DATA ----------------------------- */
  const mailData = {
    from: "Haftwald <contact@haftwald.com>",
    to: "contact@haftwald.com",
    subject: `Message de ${req.body.fullname}`,
    text: req.body.message,
    html: req.body.email,
  };

  /* ------------------------------- SEND EMAIL ------------------------------- */
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
}

/* -------------------------------------------------------------------------- */
/*                               EXPORT FUNCTION                              */
/* -------------------------------------------------------------------------- */

export default contact;
