export const config = {
  api: { bodyParser: false }
};

import formidable from "formidable";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ success: false, error: "Form parse error" });
    }

    const url = fields.url;

    if (!url) {
      return res.status(400).json({ success: false, error: "URL diperlukan" });
    }

    // Simulasi proses build (ubah nanti)
    return res.status(200).json({
      success: true,
      message: "APK berhasil dibuat!",
      download: "https://example.com/download.apk"
    });
  });
}