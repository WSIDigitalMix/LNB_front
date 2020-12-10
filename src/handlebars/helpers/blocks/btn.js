module.exports = function (href, context) {
    let classes = context.hash.class ? context.hash.class : '';
    let tag = href ? 'a' : 'button';
    href = href ? `href="${href}"` : '';

    return (
        `<${tag} class="c-btn ${classes}" ${href}>${context.fn(this)}</${tag}>`
    );
}