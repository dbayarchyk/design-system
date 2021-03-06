/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyBody {
        "weight": 'light' | 'regular' | 'medium';
    }
    interface MyButton {
        "text": string;
        "type": "button" | "submit" | "reset";
        "variant": "primary" | "secondary" | "tertiary";
    }
    interface MyCenter {
        "space": "xs" | "s" | "m" | "l" | "xl" | "2xl";
    }
    interface MyHeadline {
        "level": "1" | "2" | "3" | "4";
    }
    interface MySmall {
    }
    interface MyStack {
        "space": "xs" | "s" | "m" | "l" | "xl" | "2xl";
    }
}
declare global {
    interface HTMLMyBodyElement extends Components.MyBody, HTMLStencilElement {
    }
    var HTMLMyBodyElement: {
        prototype: HTMLMyBodyElement;
        new (): HTMLMyBodyElement;
    };
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCenterElement extends Components.MyCenter, HTMLStencilElement {
    }
    var HTMLMyCenterElement: {
        prototype: HTMLMyCenterElement;
        new (): HTMLMyCenterElement;
    };
    interface HTMLMyHeadlineElement extends Components.MyHeadline, HTMLStencilElement {
    }
    var HTMLMyHeadlineElement: {
        prototype: HTMLMyHeadlineElement;
        new (): HTMLMyHeadlineElement;
    };
    interface HTMLMySmallElement extends Components.MySmall, HTMLStencilElement {
    }
    var HTMLMySmallElement: {
        prototype: HTMLMySmallElement;
        new (): HTMLMySmallElement;
    };
    interface HTMLMyStackElement extends Components.MyStack, HTMLStencilElement {
    }
    var HTMLMyStackElement: {
        prototype: HTMLMyStackElement;
        new (): HTMLMyStackElement;
    };
    interface HTMLElementTagNameMap {
        "my-body": HTMLMyBodyElement;
        "my-button": HTMLMyButtonElement;
        "my-center": HTMLMyCenterElement;
        "my-headline": HTMLMyHeadlineElement;
        "my-small": HTMLMySmallElement;
        "my-stack": HTMLMyStackElement;
    }
}
declare namespace LocalJSX {
    interface MyBody {
        "weight"?: 'light' | 'regular' | 'medium';
    }
    interface MyButton {
        "text"?: string;
        "type"?: "button" | "submit" | "reset";
        "variant"?: "primary" | "secondary" | "tertiary";
    }
    interface MyCenter {
        "space"?: "xs" | "s" | "m" | "l" | "xl" | "2xl";
    }
    interface MyHeadline {
        "level"?: "1" | "2" | "3" | "4";
    }
    interface MySmall {
    }
    interface MyStack {
        "space"?: "xs" | "s" | "m" | "l" | "xl" | "2xl";
    }
    interface IntrinsicElements {
        "my-body": MyBody;
        "my-button": MyButton;
        "my-center": MyCenter;
        "my-headline": MyHeadline;
        "my-small": MySmall;
        "my-stack": MyStack;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-body": LocalJSX.MyBody & JSXBase.HTMLAttributes<HTMLMyBodyElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-center": LocalJSX.MyCenter & JSXBase.HTMLAttributes<HTMLMyCenterElement>;
            "my-headline": LocalJSX.MyHeadline & JSXBase.HTMLAttributes<HTMLMyHeadlineElement>;
            "my-small": LocalJSX.MySmall & JSXBase.HTMLAttributes<HTMLMySmallElement>;
            "my-stack": LocalJSX.MyStack & JSXBase.HTMLAttributes<HTMLMyStackElement>;
        }
    }
}
