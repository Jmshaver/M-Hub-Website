import Image from "next/image"
import { useRouter } from "next/router";
export default function Logo({ width, height }) {
    const router = useRouter();
    const basePath = router.basePath;
    return (
        <Image
            width={width ? width : 100}
            height={height ? height : 100}
            src={
                basePath
                    ? `${basePath}/images/logo.png`
                    : "/images/logo.png"
            }
            alt="M-Hub"
            className=""
        />
    )
}