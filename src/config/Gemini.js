import axios from "axios";

const run = async (subject, message, source_lang) => {
  try {
    const response = await axios.post(
      `https://sv99tncg-5000.uks1.devtunnels.ms/`,
      {
        subject: subject,
        message: message,
        source_lang: source_lang,
      }
    );

    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export default run;
