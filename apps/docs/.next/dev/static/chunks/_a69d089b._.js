(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/ui/dist/chunk-FZKMBHB5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>Check,
    "ChevronDown",
    ()=>ChevronDown,
    "ChevronUp",
    ()=>ChevronUp,
    "Circle",
    ()=>Circle,
    "Presence",
    ()=>Presence,
    "__commonJS",
    ()=>__commonJS,
    "__require",
    ()=>__require,
    "__toESM",
    ()=>__toESM,
    "clsx",
    ()=>clsx,
    "cn",
    ()=>cn,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "composeRefs",
    ()=>composeRefs,
    "createCollection",
    ()=>createCollection,
    "useCallbackRef",
    ()=>useCallbackRef,
    "useComposedRefs",
    ()=>useComposedRefs,
    "useControllableState",
    ()=>useControllableState,
    "useDirection",
    ()=>useDirection,
    "useId",
    ()=>useId,
    "useLayoutEffect2",
    ()=>useLayoutEffect2,
    "usePrevious",
    ()=>usePrevious,
    "useSize",
    ()=>useSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x)=>("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.z : "TURBOPACK unreachable")(function(x) {
    if ("TURBOPACK compile-time truthy", 1) return /*TURBOPACK member replacement*/ __turbopack_context__.z.apply(this, arguments);
    //TURBOPACK unreachable
    ;
});
var __commonJS = (cb, mod)=>function __require2() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
;
// ../../node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
var toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
var toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
var toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
// ../../node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
var hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
// ../../node_modules/lucide-react/dist/esm/Icon.js
var Icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...!children && !hasA11yProp(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
_c1 = Icon;
// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Icon, {
            ref,
            iconNode,
            className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = toPascalCase(iconName);
    return Component;
};
// ../../node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
var Check = createLucideIcon("check", __iconNode);
// ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode2 = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
var ChevronDown = createLucideIcon("chevron-down", __iconNode2);
// ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
var __iconNode3 = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
var ChevronUp = createLucideIcon("chevron-up", __iconNode3);
// ../../node_modules/lucide-react/dist/esm/icons/circle.js
var __iconNode4 = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
var Circle = createLucideIcon("circle", __iconNode4);
// ../../node_modules/clsx/dist/clsx.mjs
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
// ../../node_modules/tailwind-merge/dist/bundle-mjs.mjs
var concatArrays = (array1, array2)=>{
    const combinedArray = new Array(array1.length + array2.length);
    for(let i = 0; i < array1.length; i++){
        combinedArray[i] = array1[i];
    }
    for(let i = 0; i < array2.length; i++){
        combinedArray[array1.length + i] = array2[i];
    }
    return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator)=>({
        classGroupId,
        validator
    });
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId)=>({
        nextPart,
        validators,
        classGroupId
    });
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        if (className.startsWith("[") && className.endsWith("]")) {
            return getGroupIdForArbitraryProperty(className);
        }
        const classParts = className.split(CLASS_PART_SEPARATOR);
        const startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
        return getGroupRecursive(classParts, startIndex, classMap);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        if (hasPostfixModifier) {
            const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
            const baseConflicts = conflictingClassGroups[classGroupId];
            if (modifierConflicts) {
                if (baseConflicts) {
                    return concatArrays(baseConflicts, modifierConflicts);
                }
                return modifierConflicts;
            }
            return baseConflicts || EMPTY_CONFLICTS;
        }
        return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
var getGroupRecursive = (classParts, startIndex, classPartObject)=>{
    const classPathsLength = classParts.length - startIndex;
    if (classPathsLength === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[startIndex];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    if (nextClassPartObject) {
        const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
        if (result) return result;
    }
    const validators = classPartObject.validators;
    if (validators === null) {
        return void 0;
    }
    const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
    const validatorsLength = validators.length;
    for(let i = 0; i < validatorsLength; i++){
        const validatorObj = validators[i];
        if (validatorObj.validator(classRest)) {
            return validatorObj.classGroupId;
        }
    }
    return void 0;
};
var getGroupIdForArbitraryProperty = (className)=>className.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
        const content = className.slice(1, -1);
        const colonIndex = content.indexOf(":");
        const property = content.slice(0, colonIndex);
        return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
    })();
var createClassMap = (config)=>{
    const { theme, classGroups } = config;
    return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme)=>{
    const classMap = createClassPartObject();
    for(const classGroupId in classGroups){
        const group = classGroups[classGroupId];
        processClassesRecursively(group, classMap, classGroupId, theme);
    }
    return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    const len = classGroup.length;
    for(let i = 0; i < len; i++){
        const classDefinition = classGroup[i];
        processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
    }
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (typeof classDefinition === "string") {
        processStringDefinition(classDefinition, classPartObject, classGroupId);
        return;
    }
    if (typeof classDefinition === "function") {
        processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
        return;
    }
    processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId)=>{
    const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
    classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
    }
    if (classPartObject.validators === null) {
        classPartObject.validators = [];
    }
    classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    const entries = Object.entries(classDefinition);
    const len = entries.length;
    for(let i = 0; i < len; i++){
        const [key, value] = entries[i];
        processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
    }
};
var getPart = (classPartObject, path)=>{
    let current = classPartObject;
    const parts = path.split(CLASS_PART_SEPARATOR);
    const len = parts.length;
    for(let i = 0; i < len; i++){
        const part = parts[i];
        let next = current.nextPart.get(part);
        if (!next) {
            next = createClassPartObject();
            current.nextPart.set(part, next);
        }
        current = next;
    }
    return current;
};
var isThemeGetter = (func)=>"isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>void 0,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = /* @__PURE__ */ Object.create(null);
    let previousCache = /* @__PURE__ */ Object.create(null);
    const update = (key, value)=>{
        cache[key] = value;
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = /* @__PURE__ */ Object.create(null);
        }
    };
    return {
        get (key) {
            let value = cache[key];
            if (value !== void 0) {
                return value;
            }
            if ((value = previousCache[key]) !== void 0) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (key in cache) {
                cache[key] = value;
            } else {
                update(key, value);
            }
        }
    };
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal)=>({
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition,
        isExternal
    });
var createParseClassName = (config)=>{
    const { prefix, experimentalParseClassName } = config;
    let parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let parenDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        const len = className.length;
        for(let index = 0; index < len; index++){
            const currentCharacter = className[index];
            if (bracketDepth === 0 && parenDepth === 0) {
                if (currentCharacter === MODIFIER_SEPARATOR) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + 1;
                    continue;
                }
                if (currentCharacter === "/") {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === "[") bracketDepth++;
            else if (currentCharacter === "]") bracketDepth--;
            else if (currentCharacter === "(") parenDepth++;
            else if (currentCharacter === ")") parenDepth--;
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
        let baseClassName = baseClassNameWithImportantModifier;
        let hasImportantModifier = false;
        if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
            hasImportantModifier = true;
        } else if (/**
     * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
     * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
     */ baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(1);
            hasImportantModifier = true;
        }
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
        return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
    };
    if (prefix) {
        const fullPrefix = prefix + MODIFIER_SEPARATOR;
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
    }
    if (experimentalParseClassName) {
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>experimentalParseClassName({
                className,
                parseClassName: parseClassNameOriginal
            });
    }
    return parseClassName;
};
var createSortModifiers = (config)=>{
    const modifierWeights = /* @__PURE__ */ new Map();
    config.orderSensitiveModifiers.forEach((mod, index)=>{
        modifierWeights.set(mod, 1e6 + index);
    });
    return (modifiers)=>{
        const result = [];
        let currentSegment = [];
        for(let i = 0; i < modifiers.length; i++){
            const modifier = modifiers[i];
            const isArbitrary = modifier[0] === "[";
            const isOrderSensitive = modifierWeights.has(modifier);
            if (isArbitrary || isOrderSensitive) {
                if (currentSegment.length > 0) {
                    currentSegment.sort();
                    result.push(...currentSegment);
                    currentSegment = [];
                }
                result.push(modifier);
            } else {
                currentSegment.push(modifier);
            }
        }
        if (currentSegment.length > 0) {
            currentSegment.sort();
            result.push(...currentSegment);
        }
        return result;
    };
};
var createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        sortModifiers: createSortModifiers(config),
        ...createClassGroupUtils(config)
    });
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers } = configUtils;
    const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        if (isExternal) {
            result = originalClassName + (result.length > 0 ? " " + result : result);
            continue;
        }
        let hasPostfixModifier = !!maybePostfixModifierPosition;
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                result = originalClassName + (result.length > 0 ? " " + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                result = originalClassName + (result.length > 0 ? " " + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.indexOf(classId) > -1) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
};
var twJoin = (...classLists)=>{
    let index = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while(index < classLists.length){
        if (argument = classLists[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
};
var toValue = (mix)=>{
    if (typeof mix === "string") {
        return mix;
    }
    let resolvedValue;
    let string = "";
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest)=>{
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall;
    const initTailwindMerge = (classList)=>{
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    };
    const tailwindMerge = (classList)=>{
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    };
    functionToCall = initTailwindMerge;
    return (...args)=>functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || fallbackThemeArr;
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+\/\d+$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value)=>fractionRegex.test(value);
var isNumber = (value)=>!!value && !Number.isNaN(Number(value));
var isInteger = (value)=>!!value && Number.isInteger(Number(value));
var isPercent = (value)=>value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value)=>tshirtUnitRegex.test(value);
var isAny = ()=>true;
var isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = ()=>false;
var isShadow = (value)=>shadowRegex.test(value);
var isImage = (value)=>imageRegex.test(value);
var isAnyNonArbitrary = (value)=>!isArbitraryValue(value) && !isArbitraryVariable(value);
var isArbitrarySize = (value)=>getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
var isArbitraryLength = (value)=>getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value)=>getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryPosition = (value)=>getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value)=>getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value)=>getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value)=>arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value)=>getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value)=>getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value)=>getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value)=>getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value)=>getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value)=>getIsArbitraryVariable(value, isLabelShadow, true);
var getIsArbitraryValue = (value, testLabel, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false)=>{
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return shouldMatchNoLabel;
    }
    return false;
};
var isLabelPosition = (label)=>label === "position" || label === "percentage";
var isLabelImage = (label)=>label === "image" || label === "url";
var isLabelSize = (label)=>label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label)=>label === "length";
var isLabelNumber = (label)=>label === "number";
var isLabelFamilyName = (label)=>label === "family-name";
var isLabelShadow = (label)=>label === "shadow";
var getDefaultConfig = ()=>{
    const themeColor = fromTheme("color");
    const themeFont = fromTheme("font");
    const themeText = fromTheme("text");
    const themeFontWeight = fromTheme("font-weight");
    const themeTracking = fromTheme("tracking");
    const themeLeading = fromTheme("leading");
    const themeBreakpoint = fromTheme("breakpoint");
    const themeContainer = fromTheme("container");
    const themeSpacing = fromTheme("spacing");
    const themeRadius = fromTheme("radius");
    const themeShadow = fromTheme("shadow");
    const themeInsetShadow = fromTheme("inset-shadow");
    const themeTextShadow = fromTheme("text-shadow");
    const themeDropShadow = fromTheme("drop-shadow");
    const themeBlur = fromTheme("blur");
    const themePerspective = fromTheme("perspective");
    const themeAspect = fromTheme("aspect");
    const themeEase = fromTheme("ease");
    const themeAnimate = fromTheme("animate");
    const scaleBreak = ()=>[
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ];
    const scalePosition = ()=>[
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "left-top",
            "top-right",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "right-top",
            "bottom-right",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "right-bottom",
            "bottom-left",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "left-bottom"
        ];
    const scalePositionWithArbitrary = ()=>[
            ...scalePosition(),
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleOverflow = ()=>[
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ];
    const scaleOverscroll = ()=>[
            "auto",
            "contain",
            "none"
        ];
    const scaleUnambiguousSpacing = ()=>[
            isArbitraryVariable,
            isArbitraryValue,
            themeSpacing
        ];
    const scaleInset = ()=>[
            isFraction,
            "full",
            "auto",
            ...scaleUnambiguousSpacing()
        ];
    const scaleGridTemplateColsRows = ()=>[
            isInteger,
            "none",
            "subgrid",
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartAndEnd = ()=>[
            "auto",
            {
                span: [
                    "full",
                    isInteger,
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            },
            isInteger,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartOrEnd = ()=>[
            isInteger,
            "auto",
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridAutoColsRows = ()=>[
            "auto",
            "min",
            "max",
            "fr",
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleAlignPrimaryAxis = ()=>[
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe"
        ];
    const scaleAlignSecondaryAxis = ()=>[
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe"
        ];
    const scaleMargin = ()=>[
            "auto",
            ...scaleUnambiguousSpacing()
        ];
    const scaleSizing = ()=>[
            isFraction,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...scaleUnambiguousSpacing()
        ];
    const scaleColor = ()=>[
            themeColor,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBgPosition = ()=>[
            ...scalePosition(),
            isArbitraryVariablePosition,
            isArbitraryPosition,
            {
                position: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleBgRepeat = ()=>[
            "no-repeat",
            {
                repeat: [
                    "",
                    "x",
                    "y",
                    "space",
                    "round"
                ]
            }
        ];
    const scaleBgSize = ()=>[
            "auto",
            "cover",
            "contain",
            isArbitraryVariableSize,
            isArbitrarySize,
            {
                size: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleGradientStopPosition = ()=>[
            isPercent,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleRadius = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            "full",
            themeRadius,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBorderWidth = ()=>[
            "",
            isNumber,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleLineStyle = ()=>[
            "solid",
            "dashed",
            "dotted",
            "double"
        ];
    const scaleBlendMode = ()=>[
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity"
        ];
    const scaleMaskImagePosition = ()=>[
            isNumber,
            isPercent,
            isArbitraryVariablePosition,
            isArbitraryPosition
        ];
    const scaleBlur = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeBlur,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleRotate = ()=>[
            "none",
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleScale = ()=>[
            "none",
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleSkew = ()=>[
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleTranslate = ()=>[
            isFraction,
            "full",
            ...scaleUnambiguousSpacing()
        ];
    return {
        cacheSize: 500,
        theme: {
            animate: [
                "spin",
                "ping",
                "pulse",
                "bounce"
            ],
            aspect: [
                "video"
            ],
            blur: [
                isTshirtSize
            ],
            breakpoint: [
                isTshirtSize
            ],
            color: [
                isAny
            ],
            container: [
                isTshirtSize
            ],
            "drop-shadow": [
                isTshirtSize
            ],
            ease: [
                "in",
                "out",
                "in-out"
            ],
            font: [
                isAnyNonArbitrary
            ],
            "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black"
            ],
            "inset-shadow": [
                isTshirtSize
            ],
            leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose"
            ],
            perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none"
            ],
            radius: [
                isTshirtSize
            ],
            shadow: [
                isTshirtSize
            ],
            spacing: [
                "px",
                isNumber
            ],
            text: [
                isTshirtSize
            ],
            "text-shadow": [
                isTshirtSize
            ],
            tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest"
            ]
        },
        classGroups: {
            // --------------
            // --- Layout ---
            // --------------
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        isFraction,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeAspect
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */ container: [
                "container"
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isNumber,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeContainer
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ "break-after": [
                {
                    "break-after": scaleBreak()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ "break-before": [
                {
                    "break-before": scaleBreak()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden"
            ],
            /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */ sr: [
                "sr-only",
                "not-sr-only"
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        "right",
                        "left",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                "isolate",
                "isolation-auto"
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ "object-position": [
                {
                    object: scalePositionWithArbitrary()
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: scaleOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-x": [
                {
                    "overflow-x": scaleOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-y": [
                {
                    "overflow-y": scaleOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-x": [
                {
                    "overscroll-x": scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-y": [
                {
                    "overscroll-y": scaleOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: scaleInset()
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-x": [
                {
                    "inset-x": scaleInset()
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-y": [
                {
                    "inset-y": scaleInset()
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: scaleInset()
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: scaleInset()
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: scaleInset()
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: scaleInset()
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: scaleInset()
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: scaleInset()
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        isInteger,
                        "auto",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------------
            // --- Flexbox and Grid ---
            // ------------------------
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: [
                        isFraction,
                        "full",
                        "auto",
                        themeContainer,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ "flex-wrap": [
                {
                    flex: [
                        "nowrap",
                        "wrap",
                        "wrap-reverse"
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        isNumber,
                        isFraction,
                        "auto",
                        "initial",
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        isInteger,
                        "first",
                        "last",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ "grid-cols": [
                {
                    "grid-cols": scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start-end": [
                {
                    col: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start": [
                {
                    "col-start": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-end": [
                {
                    "col-end": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ "grid-rows": [
                {
                    "grid-rows": scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start-end": [
                {
                    row: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start": [
                {
                    "row-start": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-end": [
                {
                    "row-end": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ "auto-cols": [
                {
                    "auto-cols": scaleGridAutoColsRows()
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ "auto-rows": [
                {
                    "auto-rows": scaleGridAutoColsRows()
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ "gap-x": [
                {
                    "gap-x": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ "gap-y": [
                {
                    "gap-y": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ "justify-content": [
                {
                    justify: [
                        ...scaleAlignPrimaryAxis(),
                        "normal"
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ "justify-items": [
                {
                    "justify-items": [
                        ...scaleAlignSecondaryAxis(),
                        "normal"
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ "justify-self": [
                {
                    "justify-self": [
                        "auto",
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ "align-content": [
                {
                    content: [
                        "normal",
                        ...scaleAlignPrimaryAxis()
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ "align-items": [
                {
                    items: [
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                "",
                                "last"
                            ]
                        }
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ "align-self": [
                {
                    self: [
                        "auto",
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                "",
                                "last"
                            ]
                        }
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ "place-content": [
                {
                    "place-content": scaleAlignPrimaryAxis()
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ "place-items": [
                {
                    "place-items": [
                        ...scaleAlignSecondaryAxis(),
                        "baseline"
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ "place-self": [
                {
                    "place-self": [
                        "auto",
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: scaleMargin()
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: scaleMargin()
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: scaleMargin()
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: scaleMargin()
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: scaleMargin()
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: scaleMargin()
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: scaleMargin()
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: scaleMargin()
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: scaleMargin()
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-x": [
                {
                    "space-x": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-x-reverse": [
                "space-x-reverse"
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-y": [
                {
                    "space-y": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-y-reverse": [
                "space-y-reverse"
            ],
            // --------------
            // --- Sizing ---
            // --------------
            /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */ size: [
                {
                    size: scaleSizing()
                }
            ],
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        themeContainer,
                        "screen",
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ "min-w": [
                {
                    "min-w": [
                        themeContainer,
                        "screen",
                        /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ "none",
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ "max-w": [
                {
                    "max-w": [
                        themeContainer,
                        "screen",
                        "none",
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ "prose",
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ {
                            screen: [
                                themeBreakpoint
                            ]
                        },
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        "screen",
                        "lh",
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ "min-h": [
                {
                    "min-h": [
                        "screen",
                        "lh",
                        "none",
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ "max-h": [
                {
                    "max-h": [
                        "screen",
                        "lh",
                        ...scaleSizing()
                    ]
                }
            ],
            // ------------------
            // --- Typography ---
            // ------------------
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ "font-size": [
                {
                    text: [
                        "base",
                        themeText,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ "font-style": [
                "italic",
                "not-italic"
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ "font-weight": [
                {
                    font: [
                        themeFontWeight,
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */ "font-stretch": [
                {
                    "font-stretch": [
                        "ultra-condensed",
                        "extra-condensed",
                        "condensed",
                        "semi-condensed",
                        "normal",
                        "semi-expanded",
                        "expanded",
                        "extra-expanded",
                        "ultra-expanded",
                        isPercent,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ "font-family": [
                {
                    font: [
                        isArbitraryVariableFamilyName,
                        isArbitraryValue,
                        themeFont
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-normal": [
                "normal-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-ordinal": [
                "ordinal"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-slashed-zero": [
                "slashed-zero"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractions"
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        themeTracking,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ "line-clamp": [
                {
                    "line-clamp": [
                        isNumber,
                        "none",
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ themeLeading,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ "list-image": [
                {
                    "list-image": [
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ "list-style-type": [
                {
                    list: [
                        "disc",
                        "decimal",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */ "placeholder-color": [
                {
                    placeholder: scaleColor()
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ "text-color": [
                {
                    text: scaleColor()
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ "text-decoration-style": [
                {
                    decoration: [
                        ...scaleLineStyle(),
                        "wavy"
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ "text-decoration-thickness": [
                {
                    decoration: [
                        isNumber,
                        "from-font",
                        "auto",
                        isArbitraryVariable,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ "text-decoration-color": [
                {
                    decoration: scaleColor()
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ "underline-offset": [
                {
                    "underline-offset": [
                        isNumber,
                        "auto",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ "text-wrap": [
                {
                    text: [
                        "wrap",
                        "nowrap",
                        "balance",
                        "pretty"
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ "vertical-align": [
                {
                    align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap",
                        "break-spaces"
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */ wrap: [
                {
                    wrap: [
                        "break-word",
                        "anywhere",
                        "normal"
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        "none",
                        "manual",
                        "auto"
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -------------------
            // --- Backgrounds ---
            // -------------------
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ "bg-position": [
                {
                    bg: scaleBgPosition()
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ "bg-repeat": [
                {
                    bg: scaleBgRepeat()
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ "bg-size": [
                {
                    bg: scaleBgSize()
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            linear: [
                                {
                                    to: [
                                        "t",
                                        "tr",
                                        "r",
                                        "br",
                                        "b",
                                        "bl",
                                        "l",
                                        "tl"
                                    ]
                                },
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            radial: [
                                "",
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            conic: [
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryVariableImage,
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ "bg-color": [
                {
                    bg: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from-pos": [
                {
                    from: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via-pos": [
                {
                    via: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to-pos": [
                {
                    to: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from": [
                {
                    from: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via": [
                {
                    via: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to": [
                {
                    to: scaleColor()
                }
            ],
            // ---------------
            // --- Borders ---
            // ---------------
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: scaleRadius()
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-s": [
                {
                    "rounded-s": scaleRadius()
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-e": [
                {
                    "rounded-e": scaleRadius()
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-t": [
                {
                    "rounded-t": scaleRadius()
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-r": [
                {
                    "rounded-r": scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-b": [
                {
                    "rounded-b": scaleRadius()
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-l": [
                {
                    "rounded-l": scaleRadius()
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ss": [
                {
                    "rounded-ss": scaleRadius()
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-se": [
                {
                    "rounded-se": scaleRadius()
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ee": [
                {
                    "rounded-ee": scaleRadius()
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-es": [
                {
                    "rounded-es": scaleRadius()
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tl": [
                {
                    "rounded-tl": scaleRadius()
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tr": [
                {
                    "rounded-tr": scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-br": [
                {
                    "rounded-br": scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-bl": [
                {
                    "rounded-bl": scaleRadius()
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w": [
                {
                    border: scaleBorderWidth()
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-x": [
                {
                    "border-x": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-y": [
                {
                    "border-y": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-s": [
                {
                    "border-s": scaleBorderWidth()
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-e": [
                {
                    "border-e": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-t": [
                {
                    "border-t": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-r": [
                {
                    "border-r": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-b": [
                {
                    "border-b": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-l": [
                {
                    "border-l": scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-x": [
                {
                    "divide-x": scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-x-reverse": [
                "divide-x-reverse"
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-y": [
                {
                    "divide-y": scaleBorderWidth()
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-y-reverse": [
                "divide-y-reverse"
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ "border-style": [
                {
                    border: [
                        ...scaleLineStyle(),
                        "hidden",
                        "none"
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */ "divide-style": [
                {
                    divide: [
                        ...scaleLineStyle(),
                        "hidden",
                        "none"
                    ]
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color": [
                {
                    border: scaleColor()
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-x": [
                {
                    "border-x": scaleColor()
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-y": [
                {
                    "border-y": scaleColor()
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-s": [
                {
                    "border-s": scaleColor()
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-e": [
                {
                    "border-e": scaleColor()
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-t": [
                {
                    "border-t": scaleColor()
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-r": [
                {
                    "border-r": scaleColor()
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-b": [
                {
                    "border-b": scaleColor()
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-l": [
                {
                    "border-l": scaleColor()
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ "divide-color": [
                {
                    divide: scaleColor()
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ "outline-style": [
                {
                    outline: [
                        ...scaleLineStyle(),
                        "none",
                        "hidden"
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ "outline-offset": [
                {
                    "outline-offset": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ "outline-w": [
                {
                    outline: [
                        "",
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ "outline-color": [
                {
                    outline: scaleColor()
                }
            ],
            // ---------------
            // --- Effects ---
            // ---------------
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        // Deprecated since Tailwind CSS v4.0.0
                        "",
                        "none",
                        themeShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */ "shadow-color": [
                {
                    shadow: scaleColor()
                }
            ],
            /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */ "inset-shadow": [
                {
                    "inset-shadow": [
                        "none",
                        themeInsetShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */ "inset-shadow-color": [
                {
                    "inset-shadow": scaleColor()
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */ "ring-w": [
                {
                    ring: scaleBorderWidth()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ "ring-w-inset": [
                "ring-inset"
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */ "ring-color": [
                {
                    ring: scaleColor()
                }
            ],
            /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ "ring-offset-w": [
                {
                    "ring-offset": [
                        isNumber,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ "ring-offset-color": [
                {
                    "ring-offset": scaleColor()
                }
            ],
            /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */ "inset-ring-w": [
                {
                    "inset-ring": scaleBorderWidth()
                }
            ],
            /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */ "inset-ring-color": [
                {
                    "inset-ring": scaleColor()
                }
            ],
            /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */ "text-shadow": [
                {
                    "text-shadow": [
                        "none",
                        themeTextShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */ "text-shadow-color": [
                {
                    "text-shadow": scaleColor()
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ "mix-blend": [
                {
                    "mix-blend": [
                        ...scaleBlendMode(),
                        "plus-darker",
                        "plus-lighter"
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ "bg-blend": [
                {
                    "bg-blend": scaleBlendMode()
                }
            ],
            /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */ "mask-clip": [
                {
                    "mask-clip": [
                        "border",
                        "padding",
                        "content",
                        "fill",
                        "stroke",
                        "view"
                    ]
                },
                "mask-no-clip"
            ],
            /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */ "mask-composite": [
                {
                    mask: [
                        "add",
                        "subtract",
                        "intersect",
                        "exclude"
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ "mask-image-linear-pos": [
                {
                    "mask-linear": [
                        isNumber
                    ]
                }
            ],
            "mask-image-linear-from-pos": [
                {
                    "mask-linear-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-linear-to-pos": [
                {
                    "mask-linear-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-linear-from-color": [
                {
                    "mask-linear-from": scaleColor()
                }
            ],
            "mask-image-linear-to-color": [
                {
                    "mask-linear-to": scaleColor()
                }
            ],
            "mask-image-t-from-pos": [
                {
                    "mask-t-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-t-to-pos": [
                {
                    "mask-t-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-t-from-color": [
                {
                    "mask-t-from": scaleColor()
                }
            ],
            "mask-image-t-to-color": [
                {
                    "mask-t-to": scaleColor()
                }
            ],
            "mask-image-r-from-pos": [
                {
                    "mask-r-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-r-to-pos": [
                {
                    "mask-r-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-r-from-color": [
                {
                    "mask-r-from": scaleColor()
                }
            ],
            "mask-image-r-to-color": [
                {
                    "mask-r-to": scaleColor()
                }
            ],
            "mask-image-b-from-pos": [
                {
                    "mask-b-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-b-to-pos": [
                {
                    "mask-b-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-b-from-color": [
                {
                    "mask-b-from": scaleColor()
                }
            ],
            "mask-image-b-to-color": [
                {
                    "mask-b-to": scaleColor()
                }
            ],
            "mask-image-l-from-pos": [
                {
                    "mask-l-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-l-to-pos": [
                {
                    "mask-l-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-l-from-color": [
                {
                    "mask-l-from": scaleColor()
                }
            ],
            "mask-image-l-to-color": [
                {
                    "mask-l-to": scaleColor()
                }
            ],
            "mask-image-x-from-pos": [
                {
                    "mask-x-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-x-to-pos": [
                {
                    "mask-x-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-x-from-color": [
                {
                    "mask-x-from": scaleColor()
                }
            ],
            "mask-image-x-to-color": [
                {
                    "mask-x-to": scaleColor()
                }
            ],
            "mask-image-y-from-pos": [
                {
                    "mask-y-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-y-to-pos": [
                {
                    "mask-y-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-y-from-color": [
                {
                    "mask-y-from": scaleColor()
                }
            ],
            "mask-image-y-to-color": [
                {
                    "mask-y-to": scaleColor()
                }
            ],
            "mask-image-radial": [
                {
                    "mask-radial": [
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            "mask-image-radial-from-pos": [
                {
                    "mask-radial-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-radial-to-pos": [
                {
                    "mask-radial-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-radial-from-color": [
                {
                    "mask-radial-from": scaleColor()
                }
            ],
            "mask-image-radial-to-color": [
                {
                    "mask-radial-to": scaleColor()
                }
            ],
            "mask-image-radial-shape": [
                {
                    "mask-radial": [
                        "circle",
                        "ellipse"
                    ]
                }
            ],
            "mask-image-radial-size": [
                {
                    "mask-radial": [
                        {
                            closest: [
                                "side",
                                "corner"
                            ],
                            farthest: [
                                "side",
                                "corner"
                            ]
                        }
                    ]
                }
            ],
            "mask-image-radial-pos": [
                {
                    "mask-radial-at": scalePosition()
                }
            ],
            "mask-image-conic-pos": [
                {
                    "mask-conic": [
                        isNumber
                    ]
                }
            ],
            "mask-image-conic-from-pos": [
                {
                    "mask-conic-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-conic-to-pos": [
                {
                    "mask-conic-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-conic-from-color": [
                {
                    "mask-conic-from": scaleColor()
                }
            ],
            "mask-image-conic-to-color": [
                {
                    "mask-conic-to": scaleColor()
                }
            ],
            /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */ "mask-mode": [
                {
                    mask: [
                        "alpha",
                        "luminance",
                        "match"
                    ]
                }
            ],
            /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */ "mask-origin": [
                {
                    "mask-origin": [
                        "border",
                        "padding",
                        "content",
                        "fill",
                        "stroke",
                        "view"
                    ]
                }
            ],
            /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */ "mask-position": [
                {
                    mask: scaleBgPosition()
                }
            ],
            /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */ "mask-repeat": [
                {
                    mask: scaleBgRepeat()
                }
            ],
            /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */ "mask-size": [
                {
                    mask: scaleBgSize()
                }
            ],
            /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */ "mask-type": [
                {
                    "mask-type": [
                        "alpha",
                        "luminance"
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ "mask-image": [
                {
                    mask: [
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ---------------
            // --- Filters ---
            // ---------------
            /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        // Deprecated since Tailwind CSS v3.0.0
                        "",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: scaleBlur()
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ "drop-shadow": [
                {
                    "drop-shadow": [
                        // Deprecated since Tailwind CSS v4.0.0
                        "",
                        "none",
                        themeDropShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */ "drop-shadow-color": [
                {
                    "drop-shadow": scaleColor()
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ "hue-rotate": [
                {
                    "hue-rotate": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ "backdrop-filter": [
                {
                    "backdrop-filter": [
                        // Deprecated since Tailwind CSS v3.0.0
                        "",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ "backdrop-blur": [
                {
                    "backdrop-blur": scaleBlur()
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ "backdrop-invert": [
                {
                    "backdrop-invert": [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // --------------
            // --- Tables ---
            // --------------
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing": [
                {
                    "border-spacing": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-x": [
                {
                    "border-spacing-x": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-y": [
                {
                    "border-spacing-y": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        "top",
                        "bottom"
                    ]
                }
            ],
            // ---------------------------------
            // --- Transitions and Animation ---
            // ---------------------------------
            /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        "",
                        "all",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */ "transition-behavior": [
                {
                    transition: [
                        "normal",
                        "discrete"
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: [
                        isNumber,
                        "initial",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        "linear",
                        "initial",
                        themeEase,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        "none",
                        themeAnimate,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------
            // --- Transforms ---
            // ------------------
            /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */ backface: [
                {
                    backface: [
                        "hidden",
                        "visible"
                    ]
                }
            ],
            /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */ perspective: [
                {
                    perspective: [
                        themePerspective,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */ "perspective-origin": [
                {
                    "perspective-origin": scalePositionWithArbitrary()
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: scaleRotate()
                }
            ],
            /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */ "rotate-x": [
                {
                    "rotate-x": scaleRotate()
                }
            ],
            /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */ "rotate-y": [
                {
                    "rotate-y": scaleRotate()
                }
            ],
            /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */ "rotate-z": [
                {
                    "rotate-z": scaleRotate()
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: scaleScale()
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ "scale-x": [
                {
                    "scale-x": scaleScale()
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ "scale-y": [
                {
                    "scale-y": scaleScale()
                }
            ],
            /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */ "scale-z": [
                {
                    "scale-z": scaleScale()
                }
            ],
            /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */ "scale-3d": [
                "scale-3d"
            ],
            /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */ skew: [
                {
                    skew: scaleSkew()
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ "skew-x": [
                {
                    "skew-x": scaleSkew()
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ "skew-y": [
                {
                    "skew-y": scaleSkew()
                }
            ],
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        isArbitraryVariable,
                        isArbitraryValue,
                        "",
                        "none",
                        "gpu",
                        "cpu"
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ "transform-origin": [
                {
                    origin: scalePositionWithArbitrary()
                }
            ],
            /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */ "transform-style": [
                {
                    transform: [
                        "3d",
                        "flat"
                    ]
                }
            ],
            /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */ translate: [
                {
                    translate: scaleTranslate()
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ "translate-x": [
                {
                    "translate-x": scaleTranslate()
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ "translate-y": [
                {
                    "translate-y": scaleTranslate()
                }
            ],
            /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */ "translate-z": [
                {
                    "translate-z": scaleTranslate()
                }
            ],
            /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */ "translate-none": [
                "translate-none"
            ],
            // ---------------------
            // --- Interactivity ---
            // ---------------------
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: scaleColor()
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        "none",
                        "auto"
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ "caret-color": [
                {
                    caret: scaleColor()
                }
            ],
            /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */ "color-scheme": [
                {
                    scheme: [
                        "normal",
                        "dark",
                        "light",
                        "light-dark",
                        "only-dark",
                        "only-light"
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */ "field-sizing": [
                {
                    "field-sizing": [
                        "fixed",
                        "content"
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ "pointer-events": [
                {
                    "pointer-events": [
                        "auto",
                        "none"
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        "none",
                        "",
                        "y",
                        "x"
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-m": [
                {
                    "scroll-m": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mx": [
                {
                    "scroll-mx": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-my": [
                {
                    "scroll-my": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ms": [
                {
                    "scroll-ms": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-me": [
                {
                    "scroll-me": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mt": [
                {
                    "scroll-mt": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mr": [
                {
                    "scroll-mr": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mb": [
                {
                    "scroll-mb": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ml": [
                {
                    "scroll-ml": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-p": [
                {
                    "scroll-p": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-px": [
                {
                    "scroll-px": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-py": [
                {
                    "scroll-py": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-ps": [
                {
                    "scroll-ps": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pe": [
                {
                    "scroll-pe": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pt": [
                {
                    "scroll-pt": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pr": [
                {
                    "scroll-pr": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pb": [
                {
                    "scroll-pb": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pl": [
                {
                    "scroll-pl": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "manipulation"
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-x": [
                {
                    "touch-pan": [
                        "x",
                        "left",
                        "right"
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-y": [
                {
                    "touch-pan": [
                        "y",
                        "up",
                        "down"
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-pz": [
                "touch-pinch-zoom"
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -----------
            // --- SVG ---
            // -----------
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        "none",
                        ...scaleColor()
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ "stroke-w": [
                {
                    stroke: [
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        "none",
                        ...scaleColor()
                    ]
                }
            ],
            // ---------------------
            // --- Accessibility ---
            // ---------------------
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ "forced-color-adjust": [
                {
                    "forced-color-adjust": [
                        "auto",
                        "none"
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "ps",
                "pe",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "ms",
                "me",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            size: [
                "w",
                "h"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
            "line-clamp": [
                "display",
                "overflow"
            ],
            rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-s": [
                "rounded-ss",
                "rounded-es"
            ],
            "rounded-e": [
                "rounded-se",
                "rounded-ee"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-x",
                "border-w-y",
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-x",
                "border-color-y",
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            translate: [
                "translate-x",
                "translate-y",
                "translate-none"
            ],
            "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ],
            touch: [
                "touch-x",
                "touch-y",
                "touch-pz"
            ],
            "touch-x": [
                "touch"
            ],
            "touch-y": [
                "touch"
            ],
            "touch-pz": [
                "touch"
            ]
        },
        conflictingClassGroupModifiers: {
            "font-size": [
                "leading"
            ]
        },
        orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection"
        ]
    };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
// src/lib/utils.ts
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
// ../../node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM = !!(("TURBOPACK compile-time value", "object") !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(composeRefs(...refs), refs);
}
_s(useComposedRefs, "epj4qY15NHsef74wNqHIp5fdZmg=");
;
;
;
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
        const BaseContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            _s();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
            if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
                for(let $i = 0; $i < 12; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
            }
            let children;
            let context;
            let scope;
            if ($[1] !== props) {
                ({ scope, children, ...context } = props);
                $[1] = props;
                $[2] = children;
                $[3] = context;
                $[4] = scope;
            } else {
                children = $[2];
                context = $[3];
                scope = $[4];
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            let t0;
            let t1;
            if ($[5] !== context) {
                t0 = ()=>context;
                t1 = Object.values(context);
                $[5] = context;
                $[6] = t0;
                $[7] = t1;
            } else {
                t0 = $[6];
                t1 = $[7];
            }
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(t0, t1);
            let t2;
            if ($[8] !== Context.Provider || $[9] !== children || $[10] !== value) {
                t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                    value,
                    children
                });
                $[8] = Context.Provider;
                $[9] = children;
                $[10] = value;
                $[11] = t2;
            } else {
                t2 = $[11];
            }
            return t2;
        };
        _s(Provider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
        Provider.displayName = rootComponentName + "Provider";
        function useContext22(consumerName, scope) {
            _s1();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
            if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
                for(let $i = 0; $i < 1; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Context);
            if (context) {
                return context;
            }
            if (defaultContext !== void 0) {
                return defaultContext;
            }
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        _s1(useContext22, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        return [
            Provider,
            useContext22
        ];
    }
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        });
        return _s(function useScope(scope) {
            _s();
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return _s(function useComposedScopes(overrideScopes) {
            _s();
            var _s1 = __turbopack_context__.k.signature();
            const nextScopes = scopeHooks.reduce(_s1((nextScopes2, { useScope, scopeName })=>{
                _s1();
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, "u4SEl84URpjHX6Z2NY+fK/APDPQ=", true), {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable(child) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
;
;
function createCollection(name) {
    var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = createContextScope(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        _s();
        const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
        if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
            for(let $i = 0; $i < 7; $i += 1){
                $[$i] = Symbol.for("react.memo_cache_sentinel");
            }
            $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
        }
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = new Map();
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(t0).current;
        let t1;
        if ($[2] !== children || $[3] !== itemMap || $[4] !== ref || $[5] !== scope) {
            t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
                scope,
                itemMap,
                collectionRef: ref,
                children
            });
            $[2] = children;
            $[3] = itemMap;
            $[4] = ref;
            $[5] = scope;
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        return t1;
    };
    _s(CollectionProvider, "i9R1RY532Tsw7syarXwOonBpwXM=");
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
    const CollectionSlot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_s1((props, forwardedRef)=>{
        _s1();
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    }, "5JQ4uy78XLW8WM+YuDpNgF/JIVs=", false, function() {
        return [
            useCollectionContext,
            useComposedRefs
        ];
    }));
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
    const CollectionItemSlot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_s2((props, forwardedRef)=>{
        _s2();
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const composedRefs = useComposedRefs(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "createCollection.CollectionItemSlot.useEffect": ()=>{
                context.itemMap.set(ref, {
                    ref,
                    ...itemData
                });
                return ({
                    "createCollection.CollectionItemSlot.useEffect": ()=>void context.itemMap.delete(ref)
                })["createCollection.CollectionItemSlot.useEffect"];
            }
        }["createCollection.CollectionItemSlot.useEffect"]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    }, "eauD3DgWC2VdU7voCXLDR4PeA+k=", false, function() {
        return [
            useComposedRefs,
            useCollectionContext
        ];
    }));
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        _s3();
        const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
        if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
            for(let $i = 0; $i < 5; $i += 1){
                $[$i] = Symbol.for("react.memo_cache_sentinel");
            }
            $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
        }
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        let t0;
        let t1;
        if ($[1] !== context.collectionRef || $[2] !== context.itemMap) {
            t0 = ({
                "useCollection[React4.useCallback()]": ()=>{
                    const collectionNode = context.collectionRef.current;
                    if (!collectionNode) {
                        return [];
                    }
                    const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
                    const items = Array.from(context.itemMap.values());
                    const orderedItems = items.sort({
                        "useCollection[React4.useCallback() > items.sort()]": (a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
                    }["useCollection[React4.useCallback() > items.sort()]"]);
                    return orderedItems;
                }
            })["useCollection[React4.useCallback()]"];
            t1 = [
                context.collectionRef,
                context.itemMap
            ];
            $[1] = context.collectionRef;
            $[2] = context.itemMap;
            $[3] = t0;
            $[4] = t1;
        } else {
            t0 = $[3];
            t1 = $[4];
        }
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(t0, t1);
        return getItems;
    }
    _s3(useCollection, "jCyvzZFUzVDqeEjq0R8vi6mUa78=", false, function() {
        return [
            useCollectionContext
        ];
    });
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
;
;
var DirectionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
function useDirection(localDir) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(DirectionContext);
    return localDir || globalDir || "ltr";
}
_s1(useDirection, "Dyp5LNtc3jInRztlo7OKcE6vbIw=");
;
function useCallbackRef(callback) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(callback);
    let t0;
    if ($[1] !== callback || $[2] !== callbackRef) {
        t0 = ({
            "useCallbackRef[React6.useEffect()]": ()=>{
                callbackRef.current = callback;
            }
        })["useCallbackRef[React6.useEffect()]"];
        $[1] = callback;
        $[2] = callbackRef;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(t0);
    let t1;
    if ($[4] !== callbackRef) {
        t1 = ({
            "useCallbackRef[React6.useMemo()]": ()=>(...t2)=>{
                    const args = t2;
                    return callbackRef.current?.(...args);
                }
        })["useCallbackRef[React6.useMemo()]"];
        $[4] = callbackRef;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(t1, t2);
}
_s2(useCallbackRef, "SmGaH/nKwK47PDNwL1mpt0Q/3Os=");
;
var useLayoutEffect2 = globalThis?.document ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect : ()=>{};
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useId ".trim().toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    _s3();
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    useLayoutEffect2({
        "useId.useLayoutEffect2": ()=>{
            if (!deterministicId) setId({
                "useId.useLayoutEffect2": (reactId)=>reactId ?? String(count++)
            }["useId.useLayoutEffect2"]);
        }
    }["useId.useLayoutEffect2"], [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
_s3(useId, "SRIQmLZeRXV8RAX/yJZz0a/Dr4U=", false, function() {
    return [
        useLayoutEffect2
    ];
});
;
function useSize(element) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    const [size, setSize] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(void 0);
    let t0;
    if ($[1] !== element || $[2] !== setSize) {
        t0 = ({
            "useSize[useLayoutEffect2()]": ()=>{
                if (element) {
                    setSize({
                        width: element.offsetWidth,
                        height: element.offsetHeight
                    });
                    const resizeObserver = new ResizeObserver((entries)=>{
                        if (!Array.isArray(entries)) {
                            return;
                        }
                        if (!entries.length) {
                            return;
                        }
                        const entry = entries[0];
                        let width;
                        let height;
                        if ("borderBoxSize" in entry) {
                            const borderSizeEntry = entry.borderBoxSize;
                            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                            width = borderSize.inlineSize;
                            height = borderSize.blockSize;
                        } else {
                            width = element.offsetWidth;
                            height = element.offsetHeight;
                        }
                        setSize({
                            width,
                            height
                        });
                    });
                    resizeObserver.observe(element, {
                        box: "border-box"
                    });
                    return ()=>resizeObserver.unobserve(element);
                } else {
                    setSize(void 0);
                }
            }
        })["useSize[useLayoutEffect2()]"];
        $[1] = element;
        $[2] = setSize;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[4] !== element) {
        t1 = [
            element
        ];
        $[4] = element;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    useLayoutEffect2(t0, t1);
    return size;
}
_s4(useSize, "PYVFpuANmww6xLigKcsVR4qPib4=", false, function() {
    return [
        useLayoutEffect2
    ];
});
;
;
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState(t0) {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    const { prop, defaultProp, onChange: t1, caller } = t0;
    const onChange = t1 === undefined ? _temp : t1;
    let t2;
    if ($[1] !== defaultProp || $[2] !== onChange) {
        t2 = {
            defaultProp,
            onChange
        };
        $[1] = defaultProp;
        $[2] = onChange;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState(t2);
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(prop !== void 0);
    let t3;
    if ($[4] !== caller || $[5] !== isControlled || $[6] !== isControlledRef) {
        t3 = ({
            "useControllableState[React10.useEffect()]": ()=>{
                const wasControlled = isControlledRef.current;
                if (wasControlled !== isControlled) {
                    const from = wasControlled ? "controlled" : "uncontrolled";
                    const to = isControlled ? "controlled" : "uncontrolled";
                    console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
                }
                isControlledRef.current = isControlled;
            }
        })["useControllableState[React10.useEffect()]"];
        $[4] = caller;
        $[5] = isControlled;
        $[6] = isControlledRef;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== caller || $[9] !== isControlled) {
        t4 = [
            isControlled,
            caller
        ];
        $[8] = caller;
        $[9] = isControlled;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(t3, t4);
    let t5;
    let t6;
    if ($[11] !== isControlled || $[12] !== onChangeRef || $[13] !== prop || $[14] !== setUncontrolledProp) {
        t5 = ({
            "useControllableState[React10.useCallback()]": (nextValue)=>{
                if (isControlled) {
                    const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
                    if (value2 !== prop) {
                        onChangeRef.current?.(value2);
                    }
                } else {
                    setUncontrolledProp(nextValue);
                }
            }
        })["useControllableState[React10.useCallback()]"];
        t6 = [
            isControlled,
            prop,
            setUncontrolledProp,
            onChangeRef
        ];
        $[11] = isControlled;
        $[12] = onChangeRef;
        $[13] = prop;
        $[14] = setUncontrolledProp;
        $[15] = t5;
        $[16] = t6;
    } else {
        t5 = $[15];
        t6 = $[16];
    }
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(t5, t6);
    let t7;
    if ($[17] !== setValue || $[18] !== value) {
        t7 = [
            value,
            setValue
        ];
        $[17] = setValue;
        $[18] = value;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    return t7;
}
_s5(useControllableState, "dNHIrNVEGcjJALfQihSq9AScuL8=", false, function() {
    return [
        useUncontrolledState
    ];
});
function _temp() {}
function useUncontrolledState(t0) {
    _s6();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    const { defaultProp, onChange } = t0;
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(defaultProp);
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(value);
    const onChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(onChange);
    let t1;
    if ($[1] !== onChange || $[2] !== onChangeRef) {
        t1 = ({
            "useUncontrolledState[useInsertionEffect()]": ()=>{
                onChangeRef.current = onChange;
            }
        })["useUncontrolledState[useInsertionEffect()]"];
        $[1] = onChange;
        $[2] = onChangeRef;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== onChange) {
        t2 = [
            onChange
        ];
        $[4] = onChange;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    useInsertionEffect(t1, t2);
    let t3;
    if ($[6] !== onChangeRef || $[7] !== prevValueRef || $[8] !== value) {
        t3 = ({
            "useUncontrolledState[React10.useEffect()]": ()=>{
                if (prevValueRef.current !== value) {
                    onChangeRef.current?.(value);
                    prevValueRef.current = value;
                }
            }
        })["useUncontrolledState[React10.useEffect()]"];
        $[6] = onChangeRef;
        $[7] = prevValueRef;
        $[8] = value;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== prevValueRef || $[11] !== value) {
        t4 = [
            value,
            prevValueRef
        ];
        $[10] = prevValueRef;
        $[11] = value;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(t3, t4);
    let t5;
    if ($[13] !== onChangeRef || $[14] !== setValue || $[15] !== value) {
        t5 = [
            value,
            setValue,
            onChangeRef
        ];
        $[13] = onChangeRef;
        $[14] = setValue;
        $[15] = value;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_s6(useUncontrolledState, "3h0qHZ/1AyfNkzg03PGywB5pC7Y=", false, function() {
    return [
        useInsertionEffect
    ];
});
function isFunction(value) {
    return typeof value === "function";
}
;
function usePrevious(value) {
    _s7();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    let t0;
    if ($[1] !== value) {
        t0 = {
            value,
            previous: value
        };
        $[1] = value;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(t0);
    let t1;
    if ($[3] !== ref || $[4] !== value) {
        t1 = ({
            "usePrevious[React11.useMemo()]": ()=>{
                if (ref.current.value !== value) {
                    ref.current.previous = ref.current.value;
                    ref.current.value = value;
                }
                return ref.current.previous;
            }
        })["usePrevious[React11.useMemo()]"];
        $[3] = ref;
        $[4] = value;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== value) {
        t2 = [
            value
        ];
        $[6] = value;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(t1, t2);
}
_s7(usePrevious, "ByE6CK57tkoA8UB2NSxtIltRrK4=");
;
;
function useStateMachine(initialState, machine) {
    _s8();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    let t0;
    if ($[1] !== machine) {
        t0 = ({
            "useStateMachine[React12.useReducer()]": (state, event)=>{
                const nextState = machine[state][event];
                return nextState ?? state;
            }
        })["useStateMachine[React12.useReducer()]"];
        $[1] = machine;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer(t0, initialState);
}
_s8(useStateMachine, "skVOqNGrFQuDFh+lpttAJ2AZFeA=");
var Presence = (props)=>{
    _s9();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(children);
    const ref = useComposedRefs(presence.ref, getElementRef2(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(child, {
        ref
    }) : null;
};
_s9(Presence, "uNryTcoDvJa4CrInYRt27opyun0=", false, function() {
    return [
        usePresence,
        useComposedRefs
    ];
});
_c2 = Presence;
Presence.displayName = "Presence";
function usePresence(present) {
    _s10();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "176800c45b44d050524dbee7d827ea8e28cb9e609c98e92098911e403547f91b";
    }
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [state, send] = useStateMachine(initialState, t0);
    let t1;
    if ($[2] !== prevAnimationNameRef || $[3] !== state || $[4] !== stylesRef) {
        t1 = ({
            "usePresence[React24.useEffect()]": ()=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
            }
        })["usePresence[React24.useEffect()]"];
        $[2] = prevAnimationNameRef;
        $[3] = state;
        $[4] = stylesRef;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== state) {
        t2 = [
            state
        ];
        $[6] = state;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(t1, t2);
    let t3;
    if ($[8] !== present || $[9] !== prevAnimationNameRef || $[10] !== prevPresentRef || $[11] !== send || $[12] !== stylesRef) {
        t3 = ({
            "usePresence[useLayoutEffect2()]": ()=>{
                const styles = stylesRef.current;
                const wasPresent = prevPresentRef.current;
                const hasPresentChanged = wasPresent !== present;
                if (hasPresentChanged) {
                    const prevAnimationName = prevAnimationNameRef.current;
                    const currentAnimationName_0 = getAnimationName(styles);
                    if (present) {
                        send("MOUNT");
                    } else {
                        if (currentAnimationName_0 === "none" || styles?.display === "none") {
                            send("UNMOUNT");
                        } else {
                            const isAnimating = prevAnimationName !== currentAnimationName_0;
                            if (wasPresent && isAnimating) {
                                send("ANIMATION_OUT");
                            } else {
                                send("UNMOUNT");
                            }
                        }
                    }
                    prevPresentRef.current = present;
                }
            }
        })["usePresence[useLayoutEffect2()]"];
        $[8] = present;
        $[9] = prevAnimationNameRef;
        $[10] = prevPresentRef;
        $[11] = send;
        $[12] = stylesRef;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] !== present || $[15] !== send) {
        t4 = [
            present,
            send
        ];
        $[14] = present;
        $[15] = send;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    useLayoutEffect2(t3, t4);
    let t5;
    if ($[17] !== node || $[18] !== prevAnimationNameRef || $[19] !== prevPresentRef || $[20] !== send || $[21] !== stylesRef) {
        t5 = ({
            "usePresence[useLayoutEffect2()]": ()=>{
                if (node) {
                    let timeoutId;
                    const ownerWindow = node.ownerDocument.defaultView ?? window;
                    const handleAnimationEnd = {
                        "usePresence[useLayoutEffect2() > handleAnimationEnd]": (event)=>{
                            const currentAnimationName_1 = getAnimationName(stylesRef.current);
                            const isCurrentAnimation = currentAnimationName_1.includes(CSS.escape(event.animationName));
                            if (event.target === node && isCurrentAnimation) {
                                send("ANIMATION_END");
                                if (!prevPresentRef.current) {
                                    const currentFillMode = node.style.animationFillMode;
                                    node.style.animationFillMode = "forwards";
                                    timeoutId = ownerWindow.setTimeout({
                                        "usePresence[useLayoutEffect2() > handleAnimationEnd > ownerWindow.setTimeout()]": ()=>{
                                            if (node.style.animationFillMode === "forwards") {
                                                node.style.animationFillMode = currentFillMode;
                                            }
                                        }
                                    }["usePresence[useLayoutEffect2() > handleAnimationEnd > ownerWindow.setTimeout()]"]);
                                }
                            }
                        }
                    }["usePresence[useLayoutEffect2() > handleAnimationEnd]"];
                    const handleAnimationStart = {
                        "usePresence[useLayoutEffect2() > handleAnimationStart]": (event_0)=>{
                            if (event_0.target === node) {
                                prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                            }
                        }
                    }["usePresence[useLayoutEffect2() > handleAnimationStart]"];
                    node.addEventListener("animationstart", handleAnimationStart);
                    node.addEventListener("animationcancel", handleAnimationEnd);
                    node.addEventListener("animationend", handleAnimationEnd);
                    return ()=>{
                        ownerWindow.clearTimeout(timeoutId);
                        node.removeEventListener("animationstart", handleAnimationStart);
                        node.removeEventListener("animationcancel", handleAnimationEnd);
                        node.removeEventListener("animationend", handleAnimationEnd);
                    };
                } else {
                    send("ANIMATION_END");
                }
            }
        })["usePresence[useLayoutEffect2()]"];
        $[17] = node;
        $[18] = prevAnimationNameRef;
        $[19] = prevPresentRef;
        $[20] = send;
        $[21] = stylesRef;
        $[22] = t5;
    } else {
        t5 = $[22];
    }
    let t6;
    if ($[23] !== node || $[24] !== send) {
        t6 = [
            node,
            send
        ];
        $[23] = node;
        $[24] = send;
        $[25] = t6;
    } else {
        t6 = $[25];
    }
    useLayoutEffect2(t5, t6);
    let t7;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            "mounted",
            "unmountSuspended"
        ];
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    const t8 = t7.includes(state);
    let t9;
    if ($[27] !== setNode || $[28] !== stylesRef) {
        t9 = ({
            "usePresence[React24.useCallback()]": (node2)=>{
                stylesRef.current = node2 ? getComputedStyle(node2) : null;
                setNode(node2);
            }
        })["usePresence[React24.useCallback()]"];
        $[27] = setNode;
        $[28] = stylesRef;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    let t10;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [];
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    const t11 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback(t9, t10);
    let t12;
    if ($[31] !== t11 || $[32] !== t8) {
        t12 = {
            isPresent: t8,
            ref: t11
        };
        $[31] = t11;
        $[32] = t8;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    return t12;
}
_s10(usePresence, "VfjRH9you47pd2DXAzKWWASrQUs=", false, function() {
    return [
        useStateMachine,
        useLayoutEffect2,
        useLayoutEffect2
    ];
});
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef2(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Icon$forwardRef");
__turbopack_context__.k.register(_c1, "Icon");
__turbopack_context__.k.register(_c2, "Presence");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 /*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/circle.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/ }),
"[project]/packages/ui/dist/chunk-WQIW4LHO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar2,
    "AvatarBadge",
    ()=>AvatarBadge,
    "AvatarFallback",
    ()=>AvatarFallback2,
    "AvatarGroup",
    ()=>AvatarGroup,
    "AvatarGroupCount",
    ()=>AvatarGroupCount,
    "AvatarImage",
    ()=>AvatarImage2,
    "Badge",
    ()=>Badge,
    "Button",
    ()=>Button,
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle,
    "Checkbox",
    ()=>Checkbox2,
    "Input",
    ()=>Input,
    "Label",
    ()=>Label2,
    "RadioGroup",
    ()=>RadioGroup2,
    "RadioGroupItem",
    ()=>RadioGroupItem2,
    "Separator",
    ()=>Separator2,
    "Switch",
    ()=>Switch2,
    "Textarea",
    ()=>Textarea,
    "badgeVariants",
    ()=>badgeVariants,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/chunk-FZKMBHB5.js [app-client] (ecmascript)");
// ../../node_modules/@radix-ui/react-avatar/dist/index.mjs
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature(), _s17 = __turbopack_context__.k.signature(), _s18 = __turbopack_context__.k.signature();
;
;
// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var require_use_sync_external_store_shim_production = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__commonJS"])({
    "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js" (exports) {
        var _s = __turbopack_context__.k.signature();
        "use strict";
        var React24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])("react");
        function is(x, y) {
            return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = "function" === typeof Object.is ? Object.is : is;
        var useState6 = React24.useState;
        var useEffect7 = React24.useEffect;
        var useLayoutEffect = React24.useLayoutEffect;
        var useDebugValue = React24.useDebugValue;
        function useSyncExternalStore$2(subscribe2, getSnapshot) {
            _s();
            var value = getSnapshot(), _useState = useState6({
                inst: {
                    value,
                    getSnapshot
                }
            }), inst = _useState[0].inst, forceUpdate = _useState[1];
            useLayoutEffect({
                "require_use_sync_external_store_shim_production.useSyncExternalStore$2.useLayoutEffect": function() {
                    inst.value = value;
                    inst.getSnapshot = getSnapshot;
                    checkIfSnapshotChanged(inst) && forceUpdate({
                        inst
                    });
                }
            }["require_use_sync_external_store_shim_production.useSyncExternalStore$2.useLayoutEffect"], [
                subscribe2,
                value,
                getSnapshot
            ]);
            useEffect7({
                "require_use_sync_external_store_shim_production.useSyncExternalStore$2.useEffect7": function() {
                    checkIfSnapshotChanged(inst) && forceUpdate({
                        inst
                    });
                    return subscribe2({
                        "require_use_sync_external_store_shim_production.useSyncExternalStore$2.useEffect7": function() {
                            checkIfSnapshotChanged(inst) && forceUpdate({
                                inst
                            });
                        }
                    }["require_use_sync_external_store_shim_production.useSyncExternalStore$2.useEffect7"]);
                }
            }["require_use_sync_external_store_shim_production.useSyncExternalStore$2.useEffect7"], [
                subscribe2
            ]);
            useDebugValue(value);
            return value;
        }
        _s(useSyncExternalStore$2, "o7U50JBwJtDR0gjHfyfY2MUvcfo=", false, function() {
            return [
                useState6,
                useState6,
                useState6,
                useState6,
                useEffect7
            ];
        });
        function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            inst = inst.value;
            try {
                var nextValue = latestGetSnapshot();
                return !objectIs(inst, nextValue);
            } catch (error) {
                return true;
            }
        }
        function useSyncExternalStore$1(subscribe2, getSnapshot) {
            return getSnapshot();
        }
        var shim = "undefined" === ("TURBOPACK compile-time value", "object") || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
        exports.useSyncExternalStore = void 0 !== React24.useSyncExternalStore ? React24.useSyncExternalStore : shim;
    }
});
// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__commonJS"])({
    "../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js" (exports) {
        "use strict";
        "production" !== ("TURBOPACK compile-time value", "development") && function() {
            var _s = __turbopack_context__.k.signature();
            function is(x, y) {
                return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
            }
            function useSyncExternalStore$2(subscribe2, getSnapshot) {
                _s();
                didWarnOld18Alpha || void 0 === React24.startTransition || (didWarnOld18Alpha = true, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
                var value = getSnapshot();
                if (!didWarnUncachedGetSnapshot) {
                    var cachedValue = getSnapshot();
                    objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = true);
                }
                cachedValue = useState6({
                    inst: {
                        value,
                        getSnapshot
                    }
                });
                var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
                useLayoutEffect({
                    "require_use_sync_external_store_shim_development.useSyncExternalStore$2.useLayoutEffect": function() {
                        inst.value = value;
                        inst.getSnapshot = getSnapshot;
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst
                        });
                    }
                }["require_use_sync_external_store_shim_development.useSyncExternalStore$2.useLayoutEffect"], [
                    subscribe2,
                    value,
                    getSnapshot
                ]);
                useEffect7({
                    "require_use_sync_external_store_shim_development.useSyncExternalStore$2.useEffect7": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst
                        });
                        return subscribe2({
                            "require_use_sync_external_store_shim_development.useSyncExternalStore$2.useEffect7": function() {
                                checkIfSnapshotChanged(inst) && forceUpdate({
                                    inst
                                });
                            }
                        }["require_use_sync_external_store_shim_development.useSyncExternalStore$2.useEffect7"]);
                    }
                }["require_use_sync_external_store_shim_development.useSyncExternalStore$2.useEffect7"], [
                    subscribe2
                ]);
                useDebugValue(value);
                return value;
            }
            _s(useSyncExternalStore$2, "9OypkFz67uYPRUz9SXC3Q/pWig8=", false, function() {
                return [
                    useState6,
                    useEffect7
                ];
            });
            function checkIfSnapshotChanged(inst) {
                var latestGetSnapshot = inst.getSnapshot;
                inst = inst.value;
                try {
                    var nextValue = latestGetSnapshot();
                    return !objectIs(inst, nextValue);
                } catch (error) {
                    return true;
                }
            }
            function useSyncExternalStore$1(subscribe2, getSnapshot) {
                return getSnapshot();
            }
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
            var React24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__require"])("react"), objectIs = "function" === typeof Object.is ? Object.is : is, useState6 = React24.useState, useEffect7 = React24.useEffect, useLayoutEffect = React24.useLayoutEffect, useDebugValue = React24.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === ("TURBOPACK compile-time value", "object") || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
            exports.useSyncExternalStore = void 0 !== React24.useSyncExternalStore ? React24.useSyncExternalStore : shim;
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
        }();
    }
});
// ../../node_modules/use-sync-external-store/shim/index.js
var require_shim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__commonJS"])({
    "../../node_modules/use-sync-external-store/shim/index.js" (exports, module) {
        "use strict";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            module.exports = require_use_sync_external_store_shim_development();
        }
    }
});
;
;
;
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
        var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
        const BaseContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        BaseContext.displayName = rootComponentName + "Context";
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            _s();
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "createContextScope.createContext32.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext32.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        _s(Provider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
        Provider.displayName = rootComponentName + "Provider";
        function useContext22(consumerName, scope) {
            _s1();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 1; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Context);
            if (context) {
                return context;
            }
            if (defaultContext !== void 0) {
                return defaultContext;
            }
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        _s1(useContext22, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        return [
            Provider,
            useContext22
        ];
    }
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        });
        return _s(function useScope(scope) {
            _s();
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = scopeName;
    return [
        createContext32,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return _s(function useComposedScopes(overrideScopes) {
            _s();
            var _s1 = __turbopack_context__.k.signature();
            const nextScopes = scopeHooks.reduce(_s1((nextScopes2, { useScope, scopeName })=>{
                _s1();
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, "u4SEl84URpjHX6Z2NY+fK/APDPQ=", true), {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
;
;
;
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var use = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" use ".trim().toString()];
function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable(child) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce(_c = (primitive, node)=>{
    const Slot2 = createSlot(`Primitive.${node}`);
    const Node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot2 : node;
        if ("TURBOPACK compile-time truthy", 1) {
            window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
_c1 = Primitive;
// ../../node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var import_shim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__toESM"])(require_shim(), 1);
function useIsHydrated() {
    return (0, import_shim.useSyncExternalStore)(subscribe, ()=>true, ()=>false);
}
function subscribe() {
    return ()=>{};
}
;
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = _s((props, forwardedRef)=>{
    _s();
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState("idle");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive.span, {
            ...avatarProps,
            ref: forwardedRef
        })
    });
}, "LArj5vvXGSJ1qfdOqtP5F0s7/3k=")), "LArj5vvXGSJ1qfdOqtP5F0s7/3k=");
_c3 = Avatar;
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = _s1((props, forwardedRef)=>{
    _s1();
    const { __scopeAvatar, src, onLoadingStatusChange = ()=>{}, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
    const handleLoadingStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])({
        "AvatarImage.useCallbackRef[handleLoadingStatusChange]": (status)=>{
            onLoadingStatusChange(status);
            context.onImageLoadingStatusChange(status);
        }
    }["AvatarImage.useCallbackRef[handleLoadingStatusChange]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect2"])({
        "AvatarImage.useLayoutEffect2": ()=>{
            if (imageLoadingStatus !== "idle") {
                handleLoadingStatusChange(imageLoadingStatus);
            }
        }
    }["AvatarImage.useLayoutEffect2"], [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive.img, {
        ...imageProps,
        ref: forwardedRef,
        src
    }) : null;
}, "Kzkt1SUIktrLvs/UXHxgVIXVvgw=", false, function() {
    return [
        useAvatarContext,
        useImageLoadingStatus,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect2"]
    ];
})), "Kzkt1SUIktrLvs/UXHxgVIXVvgw=", false, function() {
    return [
        useAvatarContext,
        useImageLoadingStatus,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect2"]
    ];
});
_c5 = AvatarImage;
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = _s2((props, forwardedRef)=>{
    _s2();
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(delayMs === void 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "AvatarFallback.useEffect": ()=>{
            if (delayMs !== void 0) {
                const timerId = window.setTimeout({
                    "AvatarFallback.useEffect.timerId": ()=>setCanRender(true)
                }["AvatarFallback.useEffect.timerId"], delayMs);
                return ({
                    "AvatarFallback.useEffect": ()=>window.clearTimeout(timerId)
                })["AvatarFallback.useEffect"];
            }
        }
    }["AvatarFallback.useEffect"], [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive.span, {
        ...fallbackProps,
        ref: forwardedRef
    }) : null;
}, "IfNhTzYfBBOb8/Nn5G9fJj5kYTk=", false, function() {
    return [
        useAvatarContext
    ];
})), "IfNhTzYfBBOb8/Nn5G9fJj5kYTk=", false, function() {
    return [
        useAvatarContext
    ];
});
_c7 = AvatarFallback;
AvatarFallback.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
    if (!image) {
        return "idle";
    }
    if (!src) {
        return "error";
    }
    if (image.src !== src) {
        image.src = src;
    }
    return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
    _s3();
    const isHydrated = useIsHydrated();
    const imageRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const image = (()=>{
        if (!isHydrated) return null;
        if (!imageRef.current) {
            imageRef.current = new window.Image();
        }
        return imageRef.current;
    })();
    const [loadingStatus, setLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "useImageLoadingStatus.useState": ()=>resolveLoadingStatus(image, src)
    }["useImageLoadingStatus.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect2"])({
        "useImageLoadingStatus.useLayoutEffect2": ()=>{
            setLoadingStatus(resolveLoadingStatus(image, src));
        }
    }["useImageLoadingStatus.useLayoutEffect2"], [
        image,
        src
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect2"])({
        "useImageLoadingStatus.useLayoutEffect2": ()=>{
            const updateStatus = {
                "useImageLoadingStatus.useLayoutEffect2.updateStatus": (status)=>({
                        "useImageLoadingStatus.useLayoutEffect2.updateStatus": ()=>{
                            setLoadingStatus(status);
                        }
                    })["useImageLoadingStatus.useLayoutEffect2.updateStatus"]
            }["useImageLoadingStatus.useLayoutEffect2.updateStatus"];
            if (!image) return;
            const handleLoad = updateStatus("loaded");
            const handleError = updateStatus("error");
            image.addEventListener("load", handleLoad);
            image.addEventListener("error", handleError);
            if (referrerPolicy) {
                image.referrerPolicy = referrerPolicy;
            }
            if (typeof crossOrigin === "string") {
                image.crossOrigin = crossOrigin;
            }
            return ({
                "useImageLoadingStatus.useLayoutEffect2": ()=>{
                    image.removeEventListener("load", handleLoad);
                    image.removeEventListener("error", handleError);
                }
            })["useImageLoadingStatus.useLayoutEffect2"];
        }
    }["useImageLoadingStatus.useLayoutEffect2"], [
        image,
        crossOrigin,
        referrerPolicy
    ]);
    return loadingStatus;
}
_s3(useImageLoadingStatus, "E5JYtWhbkfORq9JGNCMGUqS9wgs=", false, function() {
    return [
        useIsHydrated,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect2"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect2"]
    ];
});
var Root = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;
;
function Avatar2({ className, size = "default", ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root, {
        "data-slot": "avatar",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", className),
        ...props
    });
}
_c8 = Avatar2;
function AvatarImage2({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Image, {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    });
}
_c9 = AvatarImage2;
function AvatarFallback2({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Fallback, {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs", className),
        ...props
    });
}
_c10 = AvatarFallback2;
function AvatarBadge({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        "data-slot": "avatar-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", className),
        ...props
    });
}
_c11 = AvatarBadge;
function AvatarGroup({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "avatar-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2", className),
        ...props
    });
}
_c12 = AvatarGroup;
function AvatarGroupCount({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "avatar-group-count",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground ring-background relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm ring-2 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", className),
        ...props
    });
}
_c13 = AvatarGroupCount;
// ../../node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
var cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === void 0) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param2)=>{
                let [key, value] = param2;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
;
var badgeVariants = cva("inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            link: "text-primary underline-offset-4 [a&]:hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? Slot : "span";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    });
}
_c14 = Badge;
;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 gap-1 rounded-sm px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    });
}
_c15 = Button;
;
function Card({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    });
}
_c16 = Card;
function CardHeader({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    });
}
_c17 = CardHeader;
function CardTitle({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    });
}
_c18 = CardTitle;
function CardDescription({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    });
}
_c19 = CardDescription;
function CardAction({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    });
}
_c20 = CardAction;
function CardContent({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    });
}
_c21 = CardContent;
function CardFooter({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    });
}
_c22 = CardFooter;
;
;
;
function createContextScope2(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
        var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
        const BaseContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            _s();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 12; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            let children;
            let context;
            let scope;
            if ($[1] !== props) {
                ({ scope, children, ...context } = props);
                $[1] = props;
                $[2] = children;
                $[3] = context;
                $[4] = scope;
            } else {
                children = $[2];
                context = $[3];
                scope = $[4];
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            let t0;
            let t1;
            if ($[5] !== context) {
                t0 = ()=>context;
                t1 = Object.values(context);
                $[5] = context;
                $[6] = t0;
                $[7] = t1;
            } else {
                t0 = $[6];
                t1 = $[7];
            }
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(t0, t1);
            let t2;
            if ($[8] !== Context.Provider || $[9] !== children || $[10] !== value) {
                t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                    value,
                    children
                });
                $[8] = Context.Provider;
                $[9] = children;
                $[10] = value;
                $[11] = t2;
            } else {
                t2 = $[11];
            }
            return t2;
        };
        _s(Provider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
        Provider.displayName = rootComponentName + "Provider";
        function useContext22(consumerName, scope) {
            _s1();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 1; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Context);
            if (context) {
                return context;
            }
            if (defaultContext !== void 0) {
                return defaultContext;
            }
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        _s1(useContext22, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        return [
            Provider,
            useContext22
        ];
    }
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        });
        return _s(function useScope(scope) {
            _s();
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "createContextScope2.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope2.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = scopeName;
    return [
        createContext32,
        composeContextScopes2(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes2(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return _s(function useComposedScopes(overrideScopes) {
            _s();
            var _s1 = __turbopack_context__.k.signature();
            const nextScopes = scopeHooks.reduce(_s1((nextScopes2, { useScope, scopeName })=>{
                _s1();
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, "u4SEl84URpjHX6Z2NY+fK/APDPQ=", true), {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "composeContextScopes2.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes2.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot2(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone2(ownerName);
    const Slot2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable2);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone2(ownerName) {
    const SlotClone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef2(children);
            const props2 = mergeProps2(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER2 = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable2(child) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER2;
}
function mergeProps2(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef2(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var NODES2 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive2 = NODES2.reduce(_c23 = (primitive, node)=>{
    const Slot2 = createSlot2(`Primitive.${node}`);
    const Node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot2 : node;
        if ("TURBOPACK compile-time truthy", 1) {
            window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
_c24 = Primitive2;
;
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope2(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
    }
    const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value: t0, internal_do_not_use_render } = props;
    const value = t0 === undefined ? "on" : t0;
    const t1 = defaultChecked ?? false;
    let t2;
    if ($[1] !== checkedProp || $[2] !== onCheckedChange || $[3] !== t1) {
        t2 = {
            prop: checkedProp,
            defaultProp: t1,
            onChange: onCheckedChange,
            caller: CHECKBOX_NAME
        };
        $[1] = checkedProp;
        $[2] = onCheckedChange;
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])(t2);
    const [control, setControl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const [bubbleInput, setBubbleInput] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const hasConsumerStoppedPropagationRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    let t3;
    if ($[5] !== control || $[6] !== form) {
        t3 = control ? !!form || !!control.closest("form") : true;
        $[5] = control;
        $[6] = form;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const isFormControl = t3;
    const t4 = isIndeterminate(defaultChecked) ? false : defaultChecked;
    let t5;
    if ($[8] !== __scopeCheckbox || $[9] !== bubbleInput || $[10] !== checked || $[11] !== children || $[12] !== control || $[13] !== disabled || $[14] !== form || $[15] !== hasConsumerStoppedPropagationRef || $[16] !== internal_do_not_use_render || $[17] !== isFormControl || $[18] !== name || $[19] !== required || $[20] !== setBubbleInput || $[21] !== setChecked || $[22] !== setControl || $[23] !== t4 || $[24] !== value) {
        const context = {
            checked,
            disabled,
            setChecked,
            control,
            setControl,
            name,
            form,
            value,
            hasConsumerStoppedPropagationRef,
            required,
            defaultChecked: t4,
            isFormControl,
            bubbleInput,
            setBubbleInput
        };
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CheckboxProviderImpl, {
            scope: __scopeCheckbox,
            ...context,
            children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
        });
        $[8] = __scopeCheckbox;
        $[9] = bubbleInput;
        $[10] = checked;
        $[11] = children;
        $[12] = control;
        $[13] = disabled;
        $[14] = form;
        $[15] = hasConsumerStoppedPropagationRef;
        $[16] = internal_do_not_use_render;
        $[17] = isFormControl;
        $[18] = name;
        $[19] = required;
        $[20] = setBubbleInput;
        $[21] = setChecked;
        $[22] = setControl;
        $[23] = t4;
        $[24] = value;
        $[25] = t5;
    } else {
        t5 = $[25];
    }
    return t5;
}
_s4(CheckboxProvider, "erWmz9H8Wqs+VxR/XRycP/H4m58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"]
    ];
});
_c25 = CheckboxProvider;
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c26 = _s5(({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef)=>{
    _s5();
    const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, setControl);
    const initialCheckedStateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(checked);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "CheckboxTrigger.useEffect": ()=>{
            const form = control?.form;
            if (form) {
                const reset = {
                    "CheckboxTrigger.useEffect.reset": ()=>setChecked(initialCheckedStateRef.current)
                }["CheckboxTrigger.useEffect.reset"];
                form.addEventListener("reset", reset);
                return ({
                    "CheckboxTrigger.useEffect": ()=>form.removeEventListener("reset", reset)
                })["CheckboxTrigger.useEffect"];
            }
        }
    }["CheckboxTrigger.useEffect"], [
        control,
        setChecked
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive2.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onKeyDown, (event)=>{
            if (event.key === "Enter") event.preventDefault();
        }),
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onClick, (event)=>{
            setChecked((prevChecked)=>isIndeterminate(prevChecked) ? true : !prevChecked);
            if (bubbleInput && isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    });
}, "1ccrqdH9ELjmSbN1OnI5Gb5xAR4=", false, function() {
    return [
        useCheckboxContext,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"]
    ];
})), "1ccrqdH9ELjmSbN1OnI5Gb5xAR4=", false, function() {
    return [
        useCheckboxContext,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"]
    ];
});
_c27 = CheckboxTrigger;
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c28 = (props, forwardedRef)=>{
    const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CheckboxProvider, {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CheckboxTrigger, {
                        ...checkboxProps,
                        ref: forwardedRef,
                        __scopeCheckbox
                    }),
                    isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CheckboxBubbleInput, {
                        __scopeCheckbox
                    })
                ]
            })
    });
});
_c29 = Checkbox;
Checkbox.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = /*#__PURE__*/ _s6(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c30 = _s6((props, forwardedRef)=>{
    _s6();
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive2.span, {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "none",
                ...props.style
            }
        })
    });
}, "XPZjzIIZHUbC5kJgI5B/JOzmD9c=", false, function() {
    return [
        useCheckboxContext
    ];
})), "XPZjzIIZHUbC5kJgI5B/JOzmD9c=", false, function() {
    return [
        useCheckboxContext
    ];
});
_c31 = CheckboxIndicator;
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = /*#__PURE__*/ _s7(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c32 = _s7(({ __scopeCheckbox, ...props }, forwardedRef)=>{
    _s7();
    const { control, hasConsumerStoppedPropagationRef, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, setBubbleInput);
    const prevChecked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(checked);
    const controlSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"])(control);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "CheckboxBubbleInput.useEffect": ()=>{
            const input = bubbleInput;
            if (!input) return;
            const inputProto = window.HTMLInputElement.prototype;
            const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
            const setChecked = descriptor.set;
            const bubbles = !hasConsumerStoppedPropagationRef.current;
            if (prevChecked !== checked && setChecked) {
                const event = new Event("click", {
                    bubbles
                });
                input.indeterminate = isIndeterminate(checked);
                setChecked.call(input, isIndeterminate(checked) ? false : checked);
                input.dispatchEvent(event);
            }
        }
    }["CheckboxBubbleInput.useEffect"], [
        bubbleInput,
        prevChecked,
        checked,
        hasConsumerStoppedPropagationRef
    ]);
    const defaultCheckedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive2.input, {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
            // We transform because the input is absolutely positioned but we have
            // rendered it **after** the button. This pulls it back to sit on top
            // of the button.
            transform: "translateX(-100%)"
        }
    });
}, "oMTIy/txoRD+vhDXTUc1BufmBYg=", false, function() {
    return [
        useCheckboxContext,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"]
    ];
})), "oMTIy/txoRD+vhDXTUc1BufmBYg=", false, function() {
    return [
        useCheckboxContext,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"]
    ];
});
_c33 = CheckboxBubbleInput;
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
    return typeof value === "function";
}
function isIndeterminate(checked) {
    return checked === "indeterminate";
}
function getState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
;
function Checkbox2({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Checkbox, {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CheckboxIndicator, {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                className: "size-3.5"
            })
        })
    });
}
_c34 = Checkbox2;
;
function Input({ className, type, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    });
}
_c35 = Input;
;
;
var NAME = "Label";
var Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c36 = (props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive.label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
_c37 = Label;
Label.displayName = NAME;
var Root2 = Label;
;
function Label2({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root2, {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    });
}
_c38 = Label2;
;
;
;
function createContextScope3(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
        var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
        const BaseContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            _s();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 12; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            let children;
            let context;
            let scope;
            if ($[1] !== props) {
                ({ scope, children, ...context } = props);
                $[1] = props;
                $[2] = children;
                $[3] = context;
                $[4] = scope;
            } else {
                children = $[2];
                context = $[3];
                scope = $[4];
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            let t0;
            let t1;
            if ($[5] !== context) {
                t0 = ()=>context;
                t1 = Object.values(context);
                $[5] = context;
                $[6] = t0;
                $[7] = t1;
            } else {
                t0 = $[6];
                t1 = $[7];
            }
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(t0, t1);
            let t2;
            if ($[8] !== Context.Provider || $[9] !== children || $[10] !== value) {
                t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                    value,
                    children
                });
                $[8] = Context.Provider;
                $[9] = children;
                $[10] = value;
                $[11] = t2;
            } else {
                t2 = $[11];
            }
            return t2;
        };
        _s(Provider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
        Provider.displayName = rootComponentName + "Provider";
        function useContext22(consumerName, scope) {
            _s1();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 1; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Context);
            if (context) {
                return context;
            }
            if (defaultContext !== void 0) {
                return defaultContext;
            }
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        _s1(useContext22, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        return [
            Provider,
            useContext22
        ];
    }
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        });
        return _s(function useScope(scope) {
            _s();
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "createContextScope3.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope3.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = scopeName;
    return [
        createContext32,
        composeContextScopes3(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes3(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return _s(function useComposedScopes(overrideScopes) {
            _s();
            var _s1 = __turbopack_context__.k.signature();
            const nextScopes = scopeHooks.reduce(_s1((nextScopes2, { useScope, scopeName })=>{
                _s1();
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, "u4SEl84URpjHX6Z2NY+fK/APDPQ=", true), {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "composeContextScopes3.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes3.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot3(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone3(ownerName);
    const Slot2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable3);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone3(ownerName) {
    const SlotClone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef3(children);
            const props2 = mergeProps3(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER3 = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable3(child) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER3;
}
function mergeProps3(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef3(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var NODES3 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive3 = NODES3.reduce(_c39 = (primitive, node)=>{
    const Slot2 = createSlot3(`Primitive.${node}`);
    const Node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot2 : node;
        if ("TURBOPACK compile-time truthy", 1) {
            window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
_c40 = Primitive3;
;
;
;
function createContextScope4(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
        var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
        const BaseContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            _s();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 12; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            let children;
            let context;
            let scope;
            if ($[1] !== props) {
                ({ scope, children, ...context } = props);
                $[1] = props;
                $[2] = children;
                $[3] = context;
                $[4] = scope;
            } else {
                children = $[2];
                context = $[3];
                scope = $[4];
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            let t0;
            let t1;
            if ($[5] !== context) {
                t0 = ()=>context;
                t1 = Object.values(context);
                $[5] = context;
                $[6] = t0;
                $[7] = t1;
            } else {
                t0 = $[6];
                t1 = $[7];
            }
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(t0, t1);
            let t2;
            if ($[8] !== Context.Provider || $[9] !== children || $[10] !== value) {
                t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                    value,
                    children
                });
                $[8] = Context.Provider;
                $[9] = children;
                $[10] = value;
                $[11] = t2;
            } else {
                t2 = $[11];
            }
            return t2;
        };
        _s(Provider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
        Provider.displayName = rootComponentName + "Provider";
        function useContext22(consumerName, scope) {
            _s1();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 1; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Context);
            if (context) {
                return context;
            }
            if (defaultContext !== void 0) {
                return defaultContext;
            }
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        _s1(useContext22, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        return [
            Provider,
            useContext22
        ];
    }
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        });
        return _s(function useScope(scope) {
            _s();
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "createContextScope4.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope4.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = scopeName;
    return [
        createContext32,
        composeContextScopes4(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes4(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return _s(function useComposedScopes(overrideScopes) {
            _s();
            var _s1 = __turbopack_context__.k.signature();
            const nextScopes = scopeHooks.reduce(_s1((nextScopes2, { useScope, scopeName })=>{
                _s1();
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, "u4SEl84URpjHX6Z2NY+fK/APDPQ=", true), {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "composeContextScopes4.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes4.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot4(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone4(ownerName);
    const Slot2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable4);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone4(ownerName) {
    const SlotClone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef4(children);
            const props2 = mergeProps4(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER4 = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable4(child) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER4;
}
function mergeProps4(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef4(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var NODES4 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive4 = NODES4.reduce(_c41 = (primitive, node)=>{
    const Slot2 = createSlot4(`Primitive.${node}`);
    const Node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot2 : node;
        if ("TURBOPACK compile-time truthy", 1) {
            window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
_c42 = Primitive4;
;
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCollection"])(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope4(GROUP_NAME, [
    createCollectionScope
]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c43 = (props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeRovingFocusGroup,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: props.__scopeRovingFocusGroup,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusGroupImpl, {
                ...props,
                ref: forwardedRef
            })
        })
    });
});
_c44 = RovingFocusGroup;
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = /*#__PURE__*/ _s8(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c45 = _s8((props, forwardedRef)=>{
    _s8();
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [currentTabStopId, setCurrentTabStopId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId ?? null,
        onChange: onCurrentTabStopIdChange,
        caller: GROUP_NAME
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false);
    const handleEntryFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "RovingFocusGroupImpl.useEffect": ()=>{
            const node = ref.current;
            if (node) {
                node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
                return ({
                    "RovingFocusGroupImpl.useEffect": ()=>node.removeEventListener(ENTRY_FOCUS, handleEntryFocus)
                })["RovingFocusGroupImpl.useEffect"];
            }
        }
    }["RovingFocusGroupImpl.useEffect"], [
        handleEntryFocus
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
            "RovingFocusGroupImpl.useCallback": (tabStopId)=>setCurrentTabStopId(tabStopId)
        }["RovingFocusGroupImpl.useCallback"], [
            setCurrentTabStopId
        ]),
        onItemShiftTab: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
            "RovingFocusGroupImpl.useCallback": ()=>setIsTabbingBackOut(true)
        }["RovingFocusGroupImpl.useCallback"], []),
        onFocusableItemAdd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
            "RovingFocusGroupImpl.useCallback": ()=>setFocusableItemsCount({
                    "RovingFocusGroupImpl.useCallback": (prevCount)=>prevCount + 1
                }["RovingFocusGroupImpl.useCallback"])
        }["RovingFocusGroupImpl.useCallback"], []),
        onFocusableItemRemove: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
            "RovingFocusGroupImpl.useCallback": ()=>setFocusableItemsCount({
                    "RovingFocusGroupImpl.useCallback": (prevCount)=>prevCount - 1
                }["RovingFocusGroupImpl.useCallback"])
        }["RovingFocusGroupImpl.useCallback"], []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive4.div, {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: {
                outline: "none",
                ...props.style
            },
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, ()=>{
                isClickFocusRef.current = true;
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, (event)=>{
                const isKeyboardFocus = !isClickFocusRef.current;
                if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                    event.currentTarget.dispatchEvent(entryFocusEvent);
                    if (!entryFocusEvent.defaultPrevented) {
                        const items = getItems().filter((item)=>item.focusable);
                        const activeItem = items.find((item)=>item.active);
                        const currentItem = items.find((item)=>item.id === currentTabStopId);
                        const candidateItems = [
                            activeItem,
                            currentItem,
                            ...items
                        ].filter(Boolean);
                        const candidateNodes = candidateItems.map((item)=>item.ref.current);
                        focusFirst(candidateNodes, preventScrollOnEntryFocus);
                    }
                }
                isClickFocusRef.current = false;
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsTabbingBackOut(false))
        })
    });
}, "VS8vVXRNJfXjVoo8fOo//1vE0D0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"],
        useCollection
    ];
})), "VS8vVXRNJfXjVoo8fOo//1vE0D0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"],
        useCollection
    ];
});
_c46 = RovingFocusGroupImpl;
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /*#__PURE__*/ _s9(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c47 = _s9((props, forwardedRef)=>{
    _s9();
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
    const autoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "RovingFocusGroupItem.useEffect": ()=>{
            if (focusable) {
                onFocusableItemAdd();
                return ({
                    "RovingFocusGroupItem.useEffect": ()=>onFocusableItemRemove()
                })["RovingFocusGroupItem.useEffect"];
            }
        }
    }["RovingFocusGroupItem.useEffect"], [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive4.span, {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, (event)=>{
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>context.onItemFocus(id)),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (event.key === "Tab" && event.shiftKey) {
                    context.onItemShiftTab();
                    return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                    event.preventDefault();
                    const items = getItems().filter((item)=>item.focusable);
                    let candidateNodes = items.map((item)=>item.ref.current);
                    if (focusIntent === "last") candidateNodes.reverse();
                    else if (focusIntent === "prev" || focusIntent === "next") {
                        if (focusIntent === "prev") candidateNodes.reverse();
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                }
            }),
            children: typeof children === "function" ? children({
                isCurrentTabStop,
                hasTabStop: currentTabStopId != null
            }) : children
        })
    });
}, "ZggUg4qpA+kNlAlJi32+XZSW+iU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        useRovingFocusContext,
        useCollection
    ];
})), "ZggUg4qpA+kNlAlJi32+XZSW+iU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        useRovingFocusContext,
        useCollection
    ];
});
_c48 = RovingFocusGroupItem;
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
        "ArrowLeft",
        "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
        "ArrowUp",
        "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus({
            preventScroll
        });
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root3 = RovingFocusGroup;
var Item = RovingFocusGroupItem;
;
;
;
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope3(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = /*#__PURE__*/ _s10(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c49 = _s10((props, forwardedRef)=>{
    _s10();
    const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, form, ...radioProps } = props;
    const [button, setButton] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "Radio.useComposedRefs[composedRefs]": (node)=>setButton(node)
    }["Radio.useComposedRefs[composedRefs]"]);
    const hasConsumerStoppedPropagationRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(RadioProvider, {
        scope: __scopeRadio,
        checked,
        disabled,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive3.button, {
                type: "button",
                role: "radio",
                "aria-checked": checked,
                "data-state": getState2(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                value,
                ...radioProps,
                ref: composedRefs,
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, (event)=>{
                    if (!checked) onCheck?.();
                    if (isFormControl) {
                        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                        if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
                    }
                })
            }),
            isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RadioBubbleInput, {
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled,
                form,
                style: {
                    transform: "translateX(-100%)"
                }
            })
        ]
    });
}, "QWpNxng9GQK4Durx2V4Tpagc8Ko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"]
    ];
})), "QWpNxng9GQK4Durx2V4Tpagc8Ko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"]
    ];
});
_c50 = Radio;
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME2 = "RadioIndicator";
var RadioIndicator = /*#__PURE__*/ _s11(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c51 = _s11((props, forwardedRef)=>{
    _s11();
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME2, __scopeRadio);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive3.span, {
            "data-state": getState2(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef
        })
    });
}, "4wXKYXHCacIFoWig7mbx04sJ34A=", false, function() {
    return [
        useRadioContext
    ];
})), "4wXKYXHCacIFoWig7mbx04sJ34A=", false, function() {
    return [
        useRadioContext
    ];
});
_c52 = RadioIndicator;
RadioIndicator.displayName = INDICATOR_NAME2;
var BUBBLE_INPUT_NAME2 = "RadioBubbleInput";
var RadioBubbleInput = /*#__PURE__*/ _s12(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c53 = _s12(({ __scopeRadio, control, checked, bubbles = true, ...props }, forwardedRef)=>{
    _s12();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, forwardedRef);
    const prevChecked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(checked);
    const controlSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"])(control);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "RadioBubbleInput.useEffect": ()=>{
            const input = ref.current;
            if (!input) return;
            const inputProto = window.HTMLInputElement.prototype;
            const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
            const setChecked = descriptor.set;
            if (prevChecked !== checked && setChecked) {
                const event = new Event("click", {
                    bubbles
                });
                setChecked.call(input, checked);
                input.dispatchEvent(event);
            }
        }
    }["RadioBubbleInput.useEffect"], [
        prevChecked,
        checked,
        bubbles
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive3.input, {
        type: "radio",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    });
}, "lFUXMsrWJQ9sGubqdGO0KGNtF90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"]
    ];
})), "lFUXMsrWJQ9sGubqdGO0KGNtF90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"]
    ];
});
_c54 = RadioBubbleInput;
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME2;
function getState2(checked) {
    return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope3(RADIO_GROUP_NAME, [
    createRovingFocusGroupScope,
    createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup = /*#__PURE__*/ _s13(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c55 = _s13((props, forwardedRef)=>{
    _s13();
    const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue ?? null,
        onChange: onValueChange,
        caller: RADIO_GROUP_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RadioGroupProvider, {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root3, {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive3.div, {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
            })
        })
    });
}, "5ryj9sVU/uUHMJDtVhL1kHsMV2g=", false, function() {
    return [
        useRovingFocusGroupScope,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"]
    ];
})), "5ryj9sVU/uUHMJDtVhL1kHsMV2g=", false, function() {
    return [
        useRovingFocusGroupScope,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"]
    ];
});
_c56 = RadioGroup;
RadioGroup.displayName = RADIO_GROUP_NAME;
var ITEM_NAME2 = "RadioGroupItem";
var RadioGroupItem = /*#__PURE__*/ _s14(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c57 = _s14((props, forwardedRef)=>{
    _s14();
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME2, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "RadioGroupItem.useEffect": ()=>{
            const handleKeyDown = {
                "RadioGroupItem.useEffect.handleKeyDown": (event)=>{
                    if (ARROW_KEYS.includes(event.key)) {
                        isArrowKeyPressedRef.current = true;
                    }
                }
            }["RadioGroupItem.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "RadioGroupItem.useEffect.handleKeyUp": ()=>isArrowKeyPressedRef.current = false
            }["RadioGroupItem.useEffect.handleKeyUp"];
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keyup", handleKeyUp);
            return ({
                "RadioGroupItem.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.removeEventListener("keyup", handleKeyUp);
                }
            })["RadioGroupItem.useEffect"];
        }
    }["RadioGroupItem.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Item, {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Radio, {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: ()=>context.onValueChange(itemProps.value),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])((event)=>{
                if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onFocus, ()=>{
                if (isArrowKeyPressedRef.current) ref.current?.click();
            })
        })
    });
}, "XS8p6FMiL+0i+RKqGXiVryKB0e4=", false, function() {
    return [
        useRadioGroupContext,
        useRovingFocusGroupScope,
        useRadioScope,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"]
    ];
})), "XS8p6FMiL+0i+RKqGXiVryKB0e4=", false, function() {
    return [
        useRadioGroupContext,
        useRovingFocusGroupScope,
        useRadioScope,
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"]
    ];
});
_c58 = RadioGroupItem;
RadioGroupItem.displayName = ITEM_NAME2;
var INDICATOR_NAME22 = "RadioGroupIndicator";
var RadioGroupIndicator = /*#__PURE__*/ _s15(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c59 = _s15((props, forwardedRef)=>{
    _s15();
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RadioIndicator, {
        ...radioScope,
        ...indicatorProps,
        ref: forwardedRef
    });
}, "glnr5+eHOuiAsMymRJMdy8d9PYQ=", false, function() {
    return [
        useRadioScope
    ];
})), "glnr5+eHOuiAsMymRJMdy8d9PYQ=", false, function() {
    return [
        useRadioScope
    ];
});
_c60 = RadioGroupIndicator;
RadioGroupIndicator.displayName = INDICATOR_NAME22;
var Root22 = RadioGroup;
var Item2 = RadioGroupItem;
var Indicator = RadioGroupIndicator;
;
function RadioGroup2({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root22, {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-3", className),
        ...props
    });
}
_c61 = RadioGroup2;
function RadioGroupItem2({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Item2, {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Indicator, {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            })
        })
    });
}
_c62 = RadioGroupItem2;
;
;
var NAME2 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = [
    "horizontal",
    "vertical"
];
var Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c63 = (props, forwardedRef)=>{
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
        role: "none"
    } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive.div, {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
    });
});
_c64 = Separator;
Separator.displayName = NAME2;
function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
}
var Root4 = Separator;
;
function Separator2({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root4, {
        "data-slot": "separator",
        decorative,
        orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    });
}
_c65 = Separator2;
;
;
;
function createContextScope5(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
        var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
        const BaseContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            _s();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 12; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            let children;
            let context;
            let scope;
            if ($[1] !== props) {
                ({ scope, children, ...context } = props);
                $[1] = props;
                $[2] = children;
                $[3] = context;
                $[4] = scope;
            } else {
                children = $[2];
                context = $[3];
                scope = $[4];
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            let t0;
            let t1;
            if ($[5] !== context) {
                t0 = ()=>context;
                t1 = Object.values(context);
                $[5] = context;
                $[6] = t0;
                $[7] = t1;
            } else {
                t0 = $[6];
                t1 = $[7];
            }
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo(t0, t1);
            let t2;
            if ($[8] !== Context.Provider || $[9] !== children || $[10] !== value) {
                t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                    value,
                    children
                });
                $[8] = Context.Provider;
                $[9] = children;
                $[10] = value;
                $[11] = t2;
            } else {
                t2 = $[11];
            }
            return t2;
        };
        _s(Provider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
        Provider.displayName = rootComponentName + "Provider";
        function useContext22(consumerName, scope) {
            _s1();
            const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
            if ($[0] !== "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e") {
                for(let $i = 0; $i < 1; $i += 1){
                    $[$i] = Symbol.for("react.memo_cache_sentinel");
                }
                $[0] = "4781184714bf6a1b7f8770a647c24272fcad3b76e3fdbf9cbba59c4d036a426e";
            }
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Context);
            if (context) {
                return context;
            }
            if (defaultContext !== void 0) {
                return defaultContext;
            }
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        _s1(useContext22, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        return [
            Provider,
            useContext22
        ];
    }
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(defaultContext);
        });
        return _s(function useScope(scope) {
            _s();
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "createContextScope5.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope5.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = scopeName;
    return [
        createContext32,
        composeContextScopes5(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes5(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        var _s = __turbopack_context__.k.signature();
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return _s(function useComposedScopes(overrideScopes) {
            _s();
            var _s1 = __turbopack_context__.k.signature();
            const nextScopes = scopeHooks.reduce(_s1((nextScopes2, { useScope, scopeName })=>{
                _s1();
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, "u4SEl84URpjHX6Z2NY+fK/APDPQ=", true), {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
                "composeContextScopes5.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes5.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        }, "nwk+m61qLgjDVUp4IGV/072DDN4=");
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot5(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone5(ownerName);
    const Slot2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable5);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
// @__NO_SIDE_EFFECTS__
function createSlotClone5(ownerName) {
    const SlotClone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef5(children);
            const props2 = mergeProps5(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER5 = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable5(child) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER5;
}
function mergeProps5(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef5(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var NODES5 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive5 = NODES5.reduce(_c66 = (primitive, node)=>{
    const Slot2 = createSlot5(`Primitive.${node}`);
    const Node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot2 : node;
        if ("TURBOPACK compile-time truthy", 1) {
            window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
_c67 = Primitive5;
;
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope5(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = /*#__PURE__*/ _s16(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c68 = _s16((props, forwardedRef)=>{
    _s16();
    const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, form, ...switchProps } = props;
    const [button, setButton] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "Switch.useComposedRefs[composedRefs]": (node)=>setButton(node)
    }["Switch.useComposedRefs[composedRefs]"]);
    const hasConsumerStoppedPropagationRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: checkedProp,
        defaultProp: defaultChecked ?? false,
        onChange: onCheckedChange,
        caller: SWITCH_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(SwitchProvider, {
        scope: __scopeSwitch,
        checked,
        disabled,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive5.button, {
                type: "button",
                role: "switch",
                "aria-checked": checked,
                "aria-required": required,
                "data-state": getState3(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                value,
                ...switchProps,
                ref: composedRefs,
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, (event)=>{
                    setChecked((prevChecked)=>!prevChecked);
                    if (isFormControl) {
                        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                        if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
                    }
                })
            }),
            isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SwitchBubbleInput, {
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled,
                form,
                style: {
                    transform: "translateX(-100%)"
                }
            })
        ]
    });
}, "1jCsQ3EC9+m1eKN712MR4EJOwWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"]
    ];
})), "1jCsQ3EC9+m1eKN712MR4EJOwWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"]
    ];
});
_c69 = Switch;
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = /*#__PURE__*/ _s17(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c70 = _s17((props, forwardedRef)=>{
    _s17();
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Primitive5.span, {
        "data-state": getState3(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
    });
}, "/Nri42KZ9XOPvQ2m28nXyo6MLS4=", false, function() {
    return [
        useSwitchContext
    ];
})), "/Nri42KZ9XOPvQ2m28nXyo6MLS4=", false, function() {
    return [
        useSwitchContext
    ];
});
_c71 = SwitchThumb;
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME3 = "SwitchBubbleInput";
var SwitchBubbleInput = /*#__PURE__*/ _s18(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c72 = _s18(({ __scopeSwitch, control, checked, bubbles = true, ...props }, forwardedRef)=>{
    _s18();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, forwardedRef);
    const prevChecked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(checked);
    const controlSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"])(control);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "SwitchBubbleInput.useEffect": ()=>{
            const input = ref.current;
            if (!input) return;
            const inputProto = window.HTMLInputElement.prototype;
            const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
            const setChecked = descriptor.set;
            if (prevChecked !== checked && setChecked) {
                const event = new Event("click", {
                    bubbles
                });
                setChecked.call(input, checked);
                input.dispatchEvent(event);
            }
        }
    }["SwitchBubbleInput.useEffect"], [
        prevChecked,
        checked,
        bubbles
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    });
}, "lFUXMsrWJQ9sGubqdGO0KGNtF90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"]
    ];
})), "lFUXMsrWJQ9sGubqdGO0KGNtF90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"]
    ];
});
_c73 = SwitchBubbleInput;
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME3;
function getState3(checked) {
    return checked ? "checked" : "unchecked";
}
var Root5 = Switch;
var Thumb = SwitchThumb;
;
function Switch2({ className, size = "default", ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root5, {
        "data-slot": "switch",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6", className),
        ...props,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Thumb, {
            "data-slot": "switch-thumb",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
        })
    });
}
_c74 = Switch2;
;
function Textarea({ className, ...props }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$FZKMBHB5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    });
}
_c75 = Textarea;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48, _c49, _c50, _c51, _c52, _c53, _c54, _c55, _c56, _c57, _c58, _c59, _c60, _c61, _c62, _c63, _c64, _c65, _c66, _c67, _c68, _c69, _c70, _c71, _c72, _c73, _c74, _c75;
__turbopack_context__.k.register(_c, "Primitive$NODES.reduce");
__turbopack_context__.k.register(_c1, "Primitive");
__turbopack_context__.k.register(_c2, "Avatar$React4.forwardRef");
__turbopack_context__.k.register(_c3, "Avatar");
__turbopack_context__.k.register(_c4, "AvatarImage$React4.forwardRef");
__turbopack_context__.k.register(_c5, "AvatarImage");
__turbopack_context__.k.register(_c6, "AvatarFallback$React4.forwardRef");
__turbopack_context__.k.register(_c7, "AvatarFallback");
__turbopack_context__.k.register(_c8, "Avatar2");
__turbopack_context__.k.register(_c9, "AvatarImage2");
__turbopack_context__.k.register(_c10, "AvatarFallback2");
__turbopack_context__.k.register(_c11, "AvatarBadge");
__turbopack_context__.k.register(_c12, "AvatarGroup");
__turbopack_context__.k.register(_c13, "AvatarGroupCount");
__turbopack_context__.k.register(_c14, "Badge");
__turbopack_context__.k.register(_c15, "Button");
__turbopack_context__.k.register(_c16, "Card");
__turbopack_context__.k.register(_c17, "CardHeader");
__turbopack_context__.k.register(_c18, "CardTitle");
__turbopack_context__.k.register(_c19, "CardDescription");
__turbopack_context__.k.register(_c20, "CardAction");
__turbopack_context__.k.register(_c21, "CardContent");
__turbopack_context__.k.register(_c22, "CardFooter");
__turbopack_context__.k.register(_c23, "Primitive2$NODES2.reduce");
__turbopack_context__.k.register(_c24, "Primitive2");
__turbopack_context__.k.register(_c25, "CheckboxProvider");
__turbopack_context__.k.register(_c26, "CheckboxTrigger$React8.forwardRef");
__turbopack_context__.k.register(_c27, "CheckboxTrigger");
__turbopack_context__.k.register(_c28, "Checkbox$React8.forwardRef");
__turbopack_context__.k.register(_c29, "Checkbox");
__turbopack_context__.k.register(_c30, "CheckboxIndicator$React8.forwardRef");
__turbopack_context__.k.register(_c31, "CheckboxIndicator");
__turbopack_context__.k.register(_c32, "CheckboxBubbleInput$React8.forwardRef");
__turbopack_context__.k.register(_c33, "CheckboxBubbleInput");
__turbopack_context__.k.register(_c34, "Checkbox2");
__turbopack_context__.k.register(_c35, "Input");
__turbopack_context__.k.register(_c36, "Label$React9.forwardRef");
__turbopack_context__.k.register(_c37, "Label");
__turbopack_context__.k.register(_c38, "Label2");
__turbopack_context__.k.register(_c39, "Primitive3$NODES3.reduce");
__turbopack_context__.k.register(_c40, "Primitive3");
__turbopack_context__.k.register(_c41, "Primitive4$NODES4.reduce");
__turbopack_context__.k.register(_c42, "Primitive4");
__turbopack_context__.k.register(_c43, "RovingFocusGroup$React16.forwardRef");
__turbopack_context__.k.register(_c44, "RovingFocusGroup");
__turbopack_context__.k.register(_c45, "RovingFocusGroupImpl$React16.forwardRef");
__turbopack_context__.k.register(_c46, "RovingFocusGroupImpl");
__turbopack_context__.k.register(_c47, "RovingFocusGroupItem$React16.forwardRef");
__turbopack_context__.k.register(_c48, "RovingFocusGroupItem");
__turbopack_context__.k.register(_c49, "Radio$React17.forwardRef");
__turbopack_context__.k.register(_c50, "Radio");
__turbopack_context__.k.register(_c51, "RadioIndicator$React17.forwardRef");
__turbopack_context__.k.register(_c52, "RadioIndicator");
__turbopack_context__.k.register(_c53, "RadioBubbleInput$React17.forwardRef");
__turbopack_context__.k.register(_c54, "RadioBubbleInput");
__turbopack_context__.k.register(_c55, "RadioGroup$React22.forwardRef");
__turbopack_context__.k.register(_c56, "RadioGroup");
__turbopack_context__.k.register(_c57, "RadioGroupItem$React22.forwardRef");
__turbopack_context__.k.register(_c58, "RadioGroupItem");
__turbopack_context__.k.register(_c59, "RadioGroupIndicator$React22.forwardRef");
__turbopack_context__.k.register(_c60, "RadioGroupIndicator");
__turbopack_context__.k.register(_c61, "RadioGroup2");
__turbopack_context__.k.register(_c62, "RadioGroupItem2");
__turbopack_context__.k.register(_c63, "Separator$React18.forwardRef");
__turbopack_context__.k.register(_c64, "Separator");
__turbopack_context__.k.register(_c65, "Separator2");
__turbopack_context__.k.register(_c66, "Primitive5$NODES5.reduce");
__turbopack_context__.k.register(_c67, "Primitive5");
__turbopack_context__.k.register(_c68, "Switch$React23.forwardRef");
__turbopack_context__.k.register(_c69, "Switch");
__turbopack_context__.k.register(_c70, "SwitchThumb$React23.forwardRef");
__turbopack_context__.k.register(_c71, "SwitchThumb");
__turbopack_context__.k.register(_c72, "SwitchBubbleInput$React23.forwardRef");
__turbopack_context__.k.register(_c73, "SwitchBubbleInput");
__turbopack_context__.k.register(_c74, "Switch2");
__turbopack_context__.k.register(_c75, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 /*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ }),
"[project]/apps/docs/src/app/playground/button/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonPlaygroundPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/chunk-WQIW4LHO.js [app-client] (ecmascript)");
"use client";
;
;
;
function ButtonPlaygroundPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "1707b6cd03ac9d533d93cd3394d47c087b33d23eb78e57444482805a7ca37f48") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1707b6cd03ac9d533d93cd3394d47c087b33d23eb78e57444482805a7ca37f48";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex flex-col gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-semibold",
                    children: "Button"
                }, void 0, false, {
                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                    lineNumber: 15,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Variants, sizes e estados principais do componente."
                }, void 0, false, {
                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                    lineNumber: 15,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold",
            children: "Variants"
        }, void 0, false, {
            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col gap-3",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "default",
                            children: "Default"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 29,
                            columnNumber: 106
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            children: "Secondary"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 29,
                            columnNumber: 148
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            children: "Outline"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 29,
                            columnNumber: 194
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            children: "Ghost"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 29,
                            columnNumber: 236
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "destructive",
                            children: "Destructive"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 29,
                            columnNumber: 274
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "link",
                            children: "Link"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 29,
                            columnNumber: 324
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                    lineNumber: 29,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold",
            children: "Sizes"
        }, void 0, false, {
            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col gap-3",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "xs",
                            children: "XS"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 43,
                            columnNumber: 106
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "default",
                            children: "Default"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 43,
                            columnNumber: 135
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            children: "SM"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 43,
                            columnNumber: 174
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            children: "LG"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 43,
                            columnNumber: 203
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "icon",
                            "aria-label": "Icon button",
                            children: "⌘"
                        }, void 0, false, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 43,
                            columnNumber: 232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                    lineNumber: 43,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold",
            children: "States"
        }, void 0, false, {
            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-8",
            children: [
                t0,
                t2,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col gap-3",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    children: "Enabled"
                                }, void 0, false, {
                                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    disabled: true,
                                    children: "Disabled"
                                }, void 0, false, {
                                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 179
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$chunk$2d$WQIW4LHO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    disabled: true,
                                    children: "Disabled outline"
                                }, void 0, false, {
                                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 220
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                            lineNumber: 57,
                            columnNumber: 104
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
                    lineNumber: 57,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/docs/src/app/playground/button/page.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = ButtonPlaygroundPage;
var _c;
__turbopack_context__.k.register(_c, "ButtonPlaygroundPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a69d089b._.js.map