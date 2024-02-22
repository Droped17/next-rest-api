import Home from '../page' 
const { render,screen } = require("@testing-library/react");

describe('first', () => {
    it('renders a heading',()=>{
        render(<Home/>);
        const heading = screen.getByRole('heading',{
            name: /Hello/
        });
        expect(heading).toBeInTheDocument();
    });
});

