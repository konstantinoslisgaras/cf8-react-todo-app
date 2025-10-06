
const Footer = () => {
    const targetYear: number = new Date().getFullYear();
    return (
        <>
            <footer className="text-center bg-cf-dark-red">
                <div className="container mx-auto py-8 text-center text-white">
                    @{targetYear} Coding Factory 8. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;