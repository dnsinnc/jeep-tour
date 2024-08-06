import ContentLoader from "react-content-loader"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileSkelet = (props: any) => (
   <ContentLoader
      speed={1}
      width={1232}
      height={'1600px'}
      viewBox="0 0 1232 1500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <rect x="0" y="0" rx="20" ry="20" width="100%" height="350" />
      <circle cx="622" cy="338" r="100" />
      <rect x="550" y="460" rx="0" ry="0" width="148" height="36" />
      <rect x="0" y="549" rx="20" ry="20" width="100%" height="80" />
      <rect x="0" y="740" rx="20" ry="20" width="100%" height="640" />
   </ContentLoader>
)

export default ProfileSkelet


