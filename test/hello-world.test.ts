import type { RenderOptions, RenderResult } from "@testing-library/vue";
import { render, fireEvent, waitFor } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import HelloWorld from "../src/components/hello-world.vue";
import {Ref, ref} from "vue";

describe("HelloWorld", () => {
  let wrapper: RenderResult;
  let mountOptions: RenderOptions = {
    global: {
      components: {
        HelloWorld,
      },
    },
  };

  const Host = {
    template: `
        <div>
          <button data-testid="modal-ref-close" @click="close"></button>
          <button data-testid="modal-ref-open" @click="open"></button>
          <HelloWorld ref="modalRef" />
        </div>
      `,
    setup() {
      const modalRef: Ref<(typeof HelloWorld & { open: () => void; close: () => void }) | undefined> = ref(null);
      const open = () => modalRef.value?.open();
      const close = () => modalRef.value?.close();

      return {
        modalRef,
        open,
        close,
      };
    },
  };

  afterEach(() => {
    wrapper.unmount();
  });

  beforeEach(() => {
    wrapper = render(Host, mountOptions);
  });

  it("should render", async () => {
    const { html, queryByText, getByText, getByTestId } = wrapper;
    expect(queryByText("Payment successful")).toEqual(null);

    const open = getByTestId("modal-ref-open");
    await fireEvent.click(open);
    getByText("Payment successful");
    getByText(
      "Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."
    );
    getByText("Got it, thanks!");

    expect(html()).toMatchSnapshot();
  });

  it("should open & close", async () => {
    const { queryByText, getByText, getByTestId } = wrapper;
    expect(queryByText("Payment successful")).toEqual(null);

    const open = getByTestId("modal-ref-open");
    await fireEvent.click(open);
    getByText("Payment successful");

    const close = getByTestId("modal-ref-close");
    await fireEvent.click(close);
    await waitFor(() =>
      expect(queryByText("Payment successful")).toEqual(null)
    );
  });
});
