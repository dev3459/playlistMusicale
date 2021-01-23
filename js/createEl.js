export function createDiv(id, className, innerHTML){
    let c = document.createElement('div');
    id !== null ? c.id = id : null;
    className !== null ? c.className = className : null;
    innerHTML !== null ? c.innerHTML = innerHTML : null;

    return c;
}

export function createSpan(id, className, innerHTML){
    let c = document.createElement('span');
    id !== null ? c.id = id : null;
    className !== null ? c.className = className : null;
    innerHTML !== null ? c.innerHTML = innerHTML : null;

    return c;
}

export function createParagraphe(id, className, innerHTML){
    let c = document.createElement('p');
    id !== null ? c.id = id : null;
    className !== null ? c.className = className : null;
    innerHTML !== null ? c.innerHTML = innerHTML : null;

    return c;
}

export function createImage(id, className, src, alt){
    let c = document.createElement('img');
    id !== null ? c.id = id : null;
    className !== null ? c.className = className : null;
    src !== null ? c.setAttribute("src", src) : null;
    alt !== null ? c.setAttribute("alt", alt) : null;

    return c;
}

export function createLabel(id, className, innerHTML, forId){
    let c = document.createElement('label');
    id !== null ? c.id = id : null;
    className !== null ? c.className = className : null;
    innerHTML !== null ? c.innerHTML = innerHTML : null;
    forId !== null ? c.setAttribute("for", forId) : null;

    return c;
}

export function createInput(id, className, placeholder){
    let c = document.createElement('input');
    id !== null ? c.id = id : null;
    className !== null ? c.className = className : null;
    placeholder !== null ? c.setAttribute("placeholder", placeholder) : null;

    return c;
}

export function createButton(id, className, innerHTML){
    let c = document.createElement('button');
    id !== null ? c.id = id : null;
    className !== null ? c.className = className : null;
    innerHTML !== null ? c.innerHTML = innerHTML : null;

    return c;
}