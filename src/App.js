import React from 'react';

// Components
import Header from './components/header';
import Footer from './components/footer';

// Views
import { ContentSwitch } from './views';

function App() {
    return (
        <main id="App">
            <Header />
            <ContentSwitch />
            <Footer />
        </main>
    );
}
    
export default App;
    