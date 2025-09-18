import socials from "@/constants/Socials"
import { IconButton } from "../button/IconButton"
import { Title } from "../typography/Title"
import { Subtitle } from "../typography/Subtitle"

const ContactsPage = () => {
    return (
        <div className="flex items-center justify-center pt-20 mx-5 text-center">
            <main>
                <Title>Contacts</Title>
                <div className="p-5"/>
                {socials.map((item) => (
                    <IconButton src={item} className={item.className}/>
                ))}
                <div className="p-5"/>
                <Subtitle>if you find any other contacts I don't guarrantee it's me</Subtitle>
            </main>
        </div>
    )
    
}

export default ContactsPage