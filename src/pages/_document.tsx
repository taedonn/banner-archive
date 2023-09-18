// 서버로 요청이 들어왔을 때 _app.tsx 다음으로 실행되는 component

// 훅
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" type="text/css"></link>
                </Head>
                <body style={{fontFamily: "Noto Sans KR"}} className="bg-theme-10">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;