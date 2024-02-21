import geoip from "geoip-lite";

export default async function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const geo = geoip.lookup(ip);
  console.log(ip);

  if (geo && geo.country === "NG") {
    // 'NG' is the ISO code for Nigeria
    res.status(200).json({ allowed: true });
  } else {
    // Redirect or send error, depending on your preference
    res.status(502).json({ allowed: false }); // Redirect example
  }
}
