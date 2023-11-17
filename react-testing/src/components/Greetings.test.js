import Greeting from "./Greetings"
import userEvent from "@testing-library/user-event"
import { render ,screen} from "@testing-library/react"

describe('Greeting Component',()=>{
    test('renders Hello World as a text',()=>{
        //Arrange
        render(<Greeting/>)
    
        //Act
        //nothing
    
        //Assert
        const helloWorldElement=screen.getByText('Hello World')
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders good to see you if the button was not clicked',()=>{
        render(<Greeting/>)
        const paraEle=screen.getByText('good to see you',{exact:false})
        expect(paraEle).toBeInTheDocument()
    })

    test('renders Changed! if the button was clicked',()=>{
        render(<Greeting/>)
        const buttonEle = screen.getByRole('button')
        userEvent.click(buttonEle)
        const outputEle=screen.getByText('Changed!',{exact:false})
        expect(outputEle).toBeInTheDocument();
    })  
    test('does not render good to to see you if the button was clicked',()=>{
        render(<Greeting/>)
        const buttonEle = screen.getByRole('button')
        userEvent.click(buttonEle)
        const outputEle=screen.queryByText('good to see you',{exact:false})
        expect(outputEle).toBeNull();
    })
})
