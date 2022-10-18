import { StackNavigationProp } from "@react-navigation/stack";

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
    AppStack: undefined;
    Home: undefined;
    Error: undefined;
};

export type NavigationProps = {
    navigation: ScreenNavigationProp;
};

export type CalcButtonProps = {
    title: string;
    callFunction: () => void;
}