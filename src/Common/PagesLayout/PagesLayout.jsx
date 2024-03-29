import styled from "styled-components";
import { Outlet } from "react-router-dom";

// Medium Query
import { useMediaQuery } from "@/Common/useMediaQuery";

/* Components ---------------------------*/
import Header from "./Header/Header.jsx";
import Footer from "./Footer.jsx";

const PagesLayout = () => {
    return (
        <PagesLayoutStyled className="PagesLayout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </PagesLayoutStyled>
    );
};

export default PagesLayout;

const PagesLayoutStyled = styled.div`
    main {
        // this is where the background color is
        background: linear-gradient(0deg, #141415 0%, #b0b0b0 100%);

        color: white;

        min-height: 600px;
        .Inset {
            padding: 50px 10px;
        }
    }
`;
