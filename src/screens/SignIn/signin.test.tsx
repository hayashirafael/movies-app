import { act, render, waitFor, screen, fireEvent, cleanup } from "@tests/utils/customRender";
import { Routes } from "@routes/index";
import theme from "@theme/index";

describe("SCREEN: SIGNIN", () => {
  beforeEach(() => render(<Routes />));
  afterEach(() => cleanup());

  const input = {
    user: "user-input",
    password: "password-input"
  };
  const button = "submit-button"

  it("should show movies screens after success authentication", async () => {
    await waitFor(() => act(() => {
      const userInput = screen.getByTestId(input.user);
      const passwordInput = screen.getByTestId(input.password);
      const submitButton = screen.getByTestId(button);
      fireEvent.changeText(userInput, 'user');
      fireEvent.changeText(passwordInput, '123');
      fireEvent.press(submitButton);
    }));
    await waitFor(() => expect(screen.getByTestId('movies-container')).toBeTruthy());
  });

  it("should show error message after fail authentication", async () => {
    await waitFor(() => act(() => {
      const userInput = screen.getByTestId(input.user);
      const passwordInput = screen.getByTestId(input.password);
      const submitButton = screen.getByTestId(button);
      fireEvent.changeText(userInput, 'user');
      fireEvent.changeText(passwordInput, '456');
      fireEvent.press(submitButton);
    }));
    await waitFor(() => expect(screen.getAllByText('Usuário ou senha incorreto')).toBeTruthy());
  });

  it("should initialize the sign-in screen with user and password set to undefined", async () => {
    await waitFor(() => {
      const userInput = screen.getByTestId(input.user);
      const passwordInput = screen.getByTestId(input.password);
      expect(userInput.props.value).toBeUndefined();
      expect(passwordInput.props.value).toBeUndefined();
    });
  });

  it("empty user input", async () => {
    await waitFor(() => act(() => {
      const userInput = screen.getByTestId(input.user);
      const submitButton = screen.getByTestId(button);
      fireEvent.changeText(userInput, '');
      fireEvent.press(submitButton);
    }));
    const result = screen.queryAllByText('Informe o usuário');
    expect(result).toBeTruthy();
  });

  it("empty password input", async () => {
    await waitFor(() => act(() => {
      const passwordInput = screen.getByTestId(input.password);
      const submitButton = screen.getByTestId(button);
      fireEvent.changeText(passwordInput, '');
      fireEvent.press(submitButton);
    }));
    const result = screen.getAllByText('Informe a senha');
    expect(result).toBeTruthy();
  });

  it("should disable the submit button when the user and password fields are empty", async () => {
    const buttonEnable = theme.COLORS.ORANGE;
    const buttonDisable = theme.COLORS.GREY200;
    await waitFor(() => act(() => {
      const submitButton = screen.getByTestId(button);
      const userInput = screen.getByTestId(input.user);
      const passwordInput = screen.getByTestId(input.password);
      expect(submitButton.props.style.backgroundColor).toBe(buttonDisable);
      fireEvent.changeText(userInput, 'user');
      fireEvent.changeText(passwordInput, '987');
    }));
    act(() => expect(screen.getByTestId(button).props.style.backgroundColor).toBe(buttonEnable));
  });

  it("should be Loading component after click in button authentication", async () => {
    await waitFor(() => act(() => {
      const userInput = screen.getByTestId(input.user);
      const passwordInput = screen.getByTestId(input.password);
      const submitButton = screen.getByTestId(button);
      fireEvent.changeText(userInput, 'user');
      fireEvent.changeText(passwordInput, '987');
      fireEvent.press(submitButton);
    }));
    expect(screen.queryByTestId('loading')).toBeTruthy();
  });

});