import React from "react";
import {fireEvent, render} from "@testing-library/react-native";
import { Alert } from "react-native";

import SignUp from "../signup";

it("renders default elements", () => {
    const { getAllByText, getByPlaceholderText} = render(<SignUp />);
    expect(getAllByText("Create Account").length).toBe(1);
    expect(getAllByText("Join with").length).toBe(1);
    expect(getAllByText("Remember Me?").length).toBe(1);
    expect(getAllByText("Forgot Password").length).toBe(1);
    getByPlaceholderText("Email");
    getByPlaceholderText("Password");

});

test("given Student Registration button is pressed, alert should be visible", () => {
    const { getByText } = render(<SignUp />);
    Alert.alert = jest.fn();
    fireEvent.press(getByText("Student Registration"));
    expect(Alert.alert.mock.calls.length).toBe(1);

  });



test("given Teacher Registration button is pressed, alert should be visible", () => {
    const { getByText } = render(<SignUp />);
    Alert.alert = jest.fn();
    fireEvent.press(getByText("Teacher Registration"));
    expect(Alert.alert.mock.calls.length).toBe(1);
  });

