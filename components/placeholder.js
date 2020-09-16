import ContentLoader from "react-content-loader"

const NavPhoto = (props) => (
    <ContentLoader
        speed={2}
        width={40}
        height={40}
        viewBox="0 0 40 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
        <circle cx="20" cy="20" r="20"/>
    </ContentLoader>
)

const NavName = (props) => (
    <ContentLoader
        speed={2}
        width={100}
        height={20}
        viewBox="0 0 100 20"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="5" y="7" rx="3" ry="3" width="90" height="6"/>
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
    </ContentLoader>
)

export {NavPhoto, NavName}