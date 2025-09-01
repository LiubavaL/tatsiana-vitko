export function resolveSocialIconName(url?: string) {
  if (!url) {
    return ''
  }

  const TELEGRAM_REGEX = /t\.me/g
  const LINKEDIN_REGEX = /linkedin\.com/g
  const INSTAGRAM_REGEX = /instagram\.com/g

  if (TELEGRAM_REGEX.test(url)) {
    return 'telegram'
  }

  if (LINKEDIN_REGEX.test(url)) {
    return 'linkedin'
  }

  if (INSTAGRAM_REGEX.test(url)) {
    return 'instagram'
  }

  return ''
}
