import React from "react";
import Head from '../Head';

const Layout = ({title, description, image, children}) => {
    return (
        <>
            <Head title={title} description={description} image={image}/>
            <main>
                {children}
            </main>
        </>
    )

}
export default Layout;