export default function AvatarFallback() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="31" fill="#83868cff" />
      <circle cx="32" cy="32" r="31" stroke="#46484bff" stroke-width="2" />
      <circle cx="24" cy="26" r="3" fill="#4a4e56ff" />
      <circle cx="40" cy="26" r="3" fill="#4a4e56ff" />
      <path
        d="M22 36C24.5 40 39.5 40 42 36"
        stroke="#4a4e56ff"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  )
}
