export const getButtondownUrls = (username: string) => {
  return {
    newsletterPage: `https://buttondown.com/${username}`,
    formAction: `https://buttondown.com/api/emails/embed-subscribe/${username}`,
    referrer: `https://buttondown.com/refer/${username}`,
    iframeSrc: `https://buttondown.com/${username}?as_embed=true`,
  }
}
