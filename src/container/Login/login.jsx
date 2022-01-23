import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom";
import { FormGroup, Form, Input, Button, Row, Col, Container } from "reactstrap";
import { login } from "../../reducers/login";
import { connect } from "react-redux"

const Login = (props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [displayMsg, setDisplayMsg] = useState(false);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (props.isLogin) {
            const { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }, [props.isLogin, history, location.state])

    const handleLogin = (e) => {
        e.preventDefault();
        props.login({ username, password });
        setDisplayMsg(true);
    }


    return (
        <Container>
            <Row className="justify-content-center m-0 my-4">
                <Col sm="6" className="my-2" >
                    <h1>Sign-In</h1>
                    <Form onSubmit={handleLogin}>
                        <FormGroup className="form-label-group my-2">
                            <Input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={e => setUserName(e.target.value)}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="form-label-group my-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
                            />
                        </FormGroup>

                        <FormGroup className="form-label-group my-2">
                            <Button type="submit">Login</Button>
                        </FormGroup>
                        {!props.isLogin && displayMsg && (
                            <FormGroup className="form-label-group my-2">
                                <span className="text-danger">Invalid Credential</span>
                            </FormGroup>
                        )}
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

const mapStateToProps = ({ login }) => ({
    isLogin: login.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
