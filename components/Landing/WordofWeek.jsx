import { Typography, Stack, Box, Link } from "@mui/material";

const WordofWeek = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap"} padding={"80px 50px"} justifyContent={"space-evenly"}>
                <Stack maxWidth={"800px"}>
                    <Link href="/wow">
                        <Typography sx={{
                            marginBottom: "30px",
                            fontSize: { xs: "30px", sm: "35px" },
                            color: "#000",
                            '&:hover': {
                                color: "#f07e05",
                            }
                        }}>Word of the Week</Typography></Link>
                    <Typography sx={{ fontSize: { xs: "18px", sm: "22px" } }}>Words are the roots that hold the tree of thoughts of the writer firmly to the soil of the reader&apos;s mind. To get the reader connected to the roots more thoroughly, Our Team brings you a new word every week in the form of the &quot;WORD OF THE WEEK&quot;.</Typography>
                </Stack>
                <Box component={"img"} src={"Literature-rafiki.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} marginTop={{ xs: "50px", sm: "50px", md: "0px" }} />
            </Stack>
        </>
    );

}
export default WordofWeek;