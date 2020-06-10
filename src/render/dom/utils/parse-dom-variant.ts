import { resolveCSSVariables } from "./css-variables-conversion"
import { unitConversion } from "./unit-type-conversion"
import { MakeTargetAnimatable } from "../../../animation/VisualElementAnimationControls"
import { HTMLVisualElement } from "../HTMLVisualElement"

export const parseDomVariant: MakeTargetAnimatable = (
    visualElement: HTMLVisualElement,
    target,
    origin,
    transitionEnd
) => {
    const resolved = resolveCSSVariables(visualElement, target, transitionEnd)
    target = resolved.target
    transitionEnd = resolved.transitionEnd

    return unitConversion(visualElement, target, origin, transitionEnd)
}