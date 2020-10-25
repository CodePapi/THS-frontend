import React from 'react'
import { Container, Button, Link, lightColors} from 'react-floating-action-button'
export default function SocialLinks() {
    return (
        <>
            <Container>
               

               <Link href="https://anchor.fm/twohalfstories"
               tooltip="https://anchor.fm/twohalfstories"
               icon="fa fa-podcast fa-anchor"
               
               styles={{backgroundColor: "black", color: lightColors.green}}  />


               <Link href="https://podcasts.apple.com/gb/podcast/twohalfstories/id1521347997" target="_blank"
               tooltip="podcasts.apple.com/gb/podcast/twohalfstories/id1521347997"
               icon="fa fa-apple" 
               
                styles={{backgroundColor: "#872EC4", color: lightColors.green}} 
              />
               
               <Link href="https://www.instagram.com/twohalfstories/"
               tooltip="instagram.com/twohalfstories/"
               icon="fa fa-instagram"
               target="_blank" 
               styles={{backgroundColor: "#405de6", color: lightColors.green}} 
              
               />


               <Link href="https://open.spotify.com/show/6VycKCMsGh4ZrLuH4Jc2Vp?si=7GxsWtYCSXi-oyKodVslJA"
               tooltip="Spotify"
               icon="fa fa-spotify"
               styles={{backgroundColor: "#1db954", color: lightColors.green}} />

           <Link href="https://twitter.com/TwoHalfStories" target="_blank"
               tooltip="twitter.com/TwoHalfStories"
               icon="fa fa-twitter" 
               styles={{backgroundColor: "#1DA1F2", color: lightColors.green}}
               />
           
             
           <Button
               tooltip="Social Link and Podcasts"
               icon="fa fa-plus"
               rotate={true}
               styles={{backgroundColor: "white", color: "black"}}
               />
       </Container>
        </>
    )
}
