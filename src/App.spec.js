import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import App, { SYMBOLS } from './App'
import GuessCount from './GuessCount'

describe('<App />', () => {
    it('renders without crashing', () => {
        // Wrapper autour du composant
        const wrapper = shallow(<App/>)
    
        // On vérifie qu'on a un composant à l'intérieur du wrapper
        expect(wrapper).to.contain(<GuessCount guesses={0} />)
    })

    it('has 36 cards', () => {
        const wrapper = shallow(<App/>)

        expect(wrapper.find('Card')).to.have.length(36)
    })

    
    it('should match its reference snapshot', () => {
        const mock = sinon.stub(App.prototype, 'generateCards').returns([...SYMBOLS.repeat(2)])

        try {
            const wrapper = shallow(<App/>)
            expect(wrapper).to.matchSnapshot()
        } finally {
            // Permet de restorer le comportement de generateCards en dehors de ce test
            mock.restore()
        }
    })
    
})