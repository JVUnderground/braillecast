import React from 'react';
import { Container, Input , FormGroup, Label} from 'reactstrap';

export default function Home(props) {
    return (
        <Container>
            <h1>Home View</h1>
            <FormGroup>
                <Label htmlFor="convert-video">Converte!</Label>
                <Input id="convert-video"/>
            </FormGroup>
        </Container>
    );
}
