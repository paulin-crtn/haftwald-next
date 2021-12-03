/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXTJS --------------------------------- */
import type { NextApiRequest, NextApiResponse } from "next";

/* ----------------------------------- NPM ---------------------------------- */
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import sanitizeHtml from "sanitize-html";

/* -------------------------------- FUNCTIONS ------------------------------- */
import { buildEmailTemplate } from "../../utils/buildEmailTemplate";
import {
  validateFullname,
  validateEmail,
  validateMessage,
} from "../../utils/formInputValidation";

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
export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /* ------------------------------ SANITIZATION ------------------------------ */
  const fullname: string = sanitizeHtml(req.body.fullname);
  const email: string = sanitizeHtml(req.body.email);
  const message: string = sanitizeHtml(req.body.message);

  /* ------------------------------- VALIDATION ------------------------------- */
  const fullnameError = validateFullname(fullname);
  const emailError = validateEmail(email);
  const messageError = validateMessage(message);

  if (!!fullnameError || !!emailError || !!messageError) {
    return res.status(500).send({});
  }

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
    subject: `Message de ${fullname}`,
    text: `${fullname} - ${email} - ${message}`,
    html: buildEmailTemplate(fullname, email, message),
  };

  /* ------------------------------- SEND EMAIL ------------------------------- */
  transporter.sendMail(
    mailData,
    function (err: Error | null, info: SMTPTransport.SentMessageInfo) {
      return err ? res.status(500).send({}) : res.status(200).send({});
    }
  );
}
