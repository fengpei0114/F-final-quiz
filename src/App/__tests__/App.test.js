import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import fetch from 'jest-fetch-mock';
import App from '../App';
import TrainerData from './fixture/TrainerData.json';
import TraineeData from './fixture/TraineeData.json';
import GroupData from './fixture/GroupData.json';

beforeEach(() => {
  fetch.doMock();
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify(TrainerData));
  fetch.mockResponseOnce(JSON.stringify(TraineeData));
});

describe('should render all thing', () => {
  it('should render App', () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId('app');

    expect(app).not.toBeEmptyDOMElement();
  });
  it('should render header', () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId('header');

    expect(header).toHaveTextContent('分组学员');
  });
  it('should render traineeList', () => {
    const { getByText } = render(<App />);
    const traineeTitle = getByText('学员列表');

    expect(traineeTitle).toBeTruthy();
  });
  it('should render trainerList', () => {
    const { getByText } = render(<App />);
    const trainerTitle = getByText('讲师列表');

    expect(trainerTitle).toBeTruthy();
  });
  it('should render group', async () => {
    const { getByTestId, findByText } = render(<App />);
    const sortGroupBtn = getByTestId('sortGroup-btn');
    fetch.mockResponseOnce(JSON.stringify(GroupData));
    fetch.mockResponseOnce(JSON.stringify(TrainerData));
    fetch.mockResponseOnce(JSON.stringify(TraineeData));
    fireEvent.click(sortGroupBtn);

    const grouplist = await findByText('1组');
    expect(grouplist).toBeTruthy();
  });
});
