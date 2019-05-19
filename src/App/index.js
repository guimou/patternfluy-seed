import React, { Component } from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import './app.css';
import { PageLayout } from './components/PageLayout';


export default class App extends Component {
  render() {
    return (
            <PageLayout></PageLayout>
    );
  }
}