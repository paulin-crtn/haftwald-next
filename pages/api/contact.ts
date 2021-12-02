/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { buildEmailTemplate } from "../../utils/buildEmailTemplate";

/* -------------------------------------------------------------------------- */
/*                                SET PASSWORD                                */
/* -------------------------------------------------------------------------- */
const password = process.env.EMAIL_PASSWORD;

/* -------------------------------------------------------------------------- */
/*                                  FUNCTION                                  */
/* -------------------------------------------------------------------------- */

/**
 * Send email to contact@haftwald.com (data comes from ModalContact.tsx file)
 * https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
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
  const fullname = req.body.fullname;
  const email = req.body.email;
  const message = req.body.message;

  const html = buildEmailTemplate(fullname, email, message);

  const mailData = {
    from: "Haftwald <contact@haftwald.com>",
    to: "contact@haftwald.com",
    subject: `Message de ${fullname}`,
    text: `${fullname} - ${email} - ${message}`,
    html,
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
