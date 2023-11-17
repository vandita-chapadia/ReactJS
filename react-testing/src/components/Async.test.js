import {render,screen} from '@testing-library/react'
import Async from './Async'
describe('Async Component',()=>{
   test('renders posts if request succeeds',async()=>{
     window.fetch = jest.fn();
     window.fetch.mockResolvedValueOnce({
        json:async()=>[{id:'p1',title:'First post'}]
     })
     render(<Async/>)
     const listele=await screen.findAllByRole('listitem')
     expect(listele).not.toHaveLength(0);
   })
})