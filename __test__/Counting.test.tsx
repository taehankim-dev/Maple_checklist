import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act, fireEvent } from '@testing-library/react';
import { Counting } from "../src/Counting";


describe("Click the Button for counting", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.createRoot(container).render(<Counting /> as React.JSX.Element);
    })
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it("Count 0에서 시작?" , () => {
    const countElement = container.querySelectorAll("span");
    expect(countElement).toHaveLength(1);
    expect(countElement[0]).toHaveTextContent("0");
  })

  it("Renders all button fileds correctly", () => {
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].type).toBe("button");
    expect(buttons[1].type).toBe("button");
  })

  it("+ 버튼 클릭 시 count +1로 변화?" , () => {
    const countElement = container.querySelector("span[data-testid='count-display']");
    const incrementButton = container.querySelector("button[data-testid='increment-button']");

    if(countElement && incrementButton){
      expect(countElement).toHaveTextContent("0");

      act(() => {
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
      });

      expect(countElement).toHaveTextContent("3");
    } else {
      console.error("엘리먼트를 찾을 수 없음.");
    }
    
  });

  it("- 버튼 클릭 시 count -1로 변화?" , () => {
    const countElement = container.querySelector("span[data-testid='count-display']");
    const decrementButton = container.querySelector("button[data-testid='decrement-button']");

    if(countElement && decrementButton){
      expect(countElement).toHaveTextContent("0");

      act(() => {
        fireEvent.click(decrementButton);
      });

      expect(countElement).toHaveTextContent("-1");
    } else {
      console.error("엘리먼트를 찾을 수 없음.");
    }
    
  });

  it("+ 버튼 눌렀다가 - 버튼 눌렀을 때는?" , () => {
    const countElement = container.querySelector("span[data-testid='count-display']");
    const incrementButton = container.querySelector("button[data-testid='increment-button']");
    const decrementButton = container.querySelector("button[data-testid='decrement-button']");

    if(countElement && incrementButton && decrementButton){
      expect(countElement).toHaveTextContent("0");

      act(() => {
        fireEvent.click(incrementButton);
      });

      expect(countElement).toHaveTextContent("1");

      act(() => {
        fireEvent.click(decrementButton);
      })

      expect(countElement).toHaveTextContent("0");
    } else {
      console.error("엘리먼트를 찾을 수 없음.");
    }
    
  });
})