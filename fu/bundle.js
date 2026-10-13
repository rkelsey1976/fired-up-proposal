/* @ds-bundle: {"format":4,"namespace":"FiredUp","components":[{"name":"Button"},{"name":"Badge"},{"name":"Icon"},{"name":"SiteHeader"},{"name":"Hero"},{"name":"ProofStrip"},{"name":"ServiceTile"},{"name":"ProductCard"},{"name":"ReviewCard"},{"name":"Field"},{"name":"SocialPost"},{"name":"Footer"},{"name":"MegaMenu"},{"name":"MobileMenu"},{"name":"AnnouncementBar"},{"name":"Breadcrumbs"},{"name":"SectionHeader"},{"name":"Slideshow"},{"name":"ProductDetail"},{"name":"SpecTable"},{"name":"Tabs"},{"name":"Accordion"},{"name":"ProcessSteps"},{"name":"CTABanner"},{"name":"EnquiryForm"},{"name":"ShowroomCard"},{"name":"FilterBar"},{"name":"ArticleCard"},{"name":"StickyCTA"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }

  /* ---------- Icon: 24px grid, 1.5px stroke, round caps ---------- */
  var ICONS = {
    flame: ['M12 3c.8 3.2 4.5 4.6 4.5 9a4.5 4.5 0 0 1-9 0c0-1.9.8-3.3 1.8-4.3.2 1.5 1 2.5 2.1 2.8C10.8 8.3 11.1 5.5 12 3z', 'M7 21h10'],
    stove: ['M10 3h4v5', 'M5.5 8h13v11h-13z', 'M9 19v-4a3 3 0 0 1 6 0v4', 'M7 19v2', 'M17 19v2'],
    fireplace: ['M2.5 5h19', 'M4 5v16', 'M20 5v16', 'M7.5 21v-6a4.5 4.5 0 0 1 9 0v6', 'M3 21h18'],
    gas: ['M12 17.5c1.9 0 3-1.3 3-3 0-2-1.6-3.1-3-5.5-1.4 2.4-3 3.5-3 5.5 0 1.7 1.1 3 3 3z', 'M5 21h14', 'M8 21v-1.5', 'M16 21v-1.5'],
    electric: ['M13 2.5L5.5 13.5h5.5L10 21.5l8-11.5h-5.5z'],
    bioethanol: ['M12 3c3 4 6 7.4 6 11a6 6 0 0 1-12 0c0-3.6 3-7 6-11z', 'M12 18c1.2 0 2-.9 2-2 0-1.2-1-1.9-2-3.5-1 1.6-2 2.3-2 3.5 0 1.1.8 2 2 2z'],
    outdoor: ['M3.5 14.5h17l-2.5 5h-12z', 'M12 4c.8 1.8 2.8 2.9 2.8 5.6a2.8 2.8 0 0 1-5.6 0c0-1.3.6-2.2 1.3-3 .2.9.7 1.4 1.3 1.6-.2-1.6 0-3 .2-4.2z'],
    aircon: ['M3 5h18v7H3z', 'M6.5 9h11', 'M7.5 15c0 1.8-1 3-1 4.5', 'M12 15v5', 'M16.5 15c0 1.8 1 3 1 4.5'],
    home: ['M4 11l8-7 8 7', 'M6 9.5V20h12V9.5', 'M10 20v-5h4v5'],
    shield: ['M12 3l7 3v5.5c0 4.3-2.9 7.7-7 9.5-4.1-1.8-7-5.2-7-9.5V6z', 'M9 12l2 2 4-4.5'],
    finance: ['M3.5 6.5h17v11h-17z', 'M3.5 10.5h17', 'M7 14.5h3'],
    years: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 7.5V12l3 2'],
    phone: ['M5 3.5h3.5l1.5 4.5-2.2 1.5a11 11 0 0 0 6.7 6.7l1.5-2.2 4.5 1.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z'],
    pin: ['M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z', 'M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'],
    calendar: ['M4 5.5h16V20H4z', 'M4 10h16', 'M8.5 3.5v4', 'M15.5 3.5v4'],
    check: ['M5 12.5l4.5 4.5L19 7.5'],
    arrow: ['M4.5 12h15', 'M13.5 6l6 6-6 6'],
    alert: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 7.5v5.5', 'M12 16.2v.3'],
    menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
    chevron: ['M6.5 9.5l5.5 5.5 5.5-5.5'],
    close: ['M6 6l12 12', 'M18 6L6 18']
  };
  var STAR = 'M12 2.8l2.8 5.9 6.4.7-4.8 4.4 1.3 6.4L12 17l-5.7 3.2 1.3-6.4-4.8-4.4 6.4-.7z';

  function Icon(p) {
    var size = p.size || 24;
    var label = p.title;
    var a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' };
    if (p.name === 'star') {
      return h('svg', Object.assign({ className: cx('fu-icon', p.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor' }, a11y), h('path', { d: STAR }));
    }
    var paths = ICONS[p.name] || ICONS.flame;
    return h('svg', Object.assign({ className: cx('fu-icon', p.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: p.strokeWidth || 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }, a11y),
      paths.map(function (d, i) { return h('path', { key: i, d: d }); }));
  }
  Icon.names = Object.keys(ICONS).concat(['star']);

  /* ---------- Logo (internal): white on Iron, Iron on Ash ---------- */
  function Logo(p) {
    var logo = p.logo || {};
    var w = p.width || 132;
    if (!logo.onDark && !logo.onLight) {
      return h('span', { className: 'fu-wordmark', style: { fontSize: Math.round(w / 4.4) + 'px' } }, 'Fired Up');
    }
    return h('span', { className: 'fu-logo', style: { width: w + 'px' } },
      logo.onDark ? h('img', { className: 'fu-logo-ondark', src: logo.onDark, alt: p.alt || 'Fired Up Fireplace & Stove Centre', width: w }) : null,
      logo.onLight ? h('img', { className: 'fu-logo-onlight', src: logo.onLight, alt: p.alt || 'Fired Up Fireplace & Stove Centre', width: w }) : null);
  }

  /* ---------- Button ---------- */
  function Button(p) {
    var variant = p.variant || 'primary';
    var size = p.size || 'md';
    var rest = Object.assign({}, p);
    ['variant', 'size', 'icon', 'iconAfter', 'children', 'className', 'href'].forEach(function (k) { delete rest[k]; });
    var kids = [
      p.icon ? h(Icon, { key: 'i', name: p.icon, size: 18 }) : null,
      h('span', { key: 't' }, p.children),
      p.iconAfter ? h(Icon, { key: 'a', name: p.iconAfter, size: 18, className: 'fu-btn-after' }) : null
    ];
    var cls = cx('fu-btn', 'fu-btn-' + variant, 'fu-btn-' + size, p.className);
    if (p.href) return h('a', Object.assign({ className: cls, href: p.href }, rest), kids);
    return h('button', Object.assign({ type: 'button', className: cls }, rest), kids);
  }

  /* ---------- Badge ---------- */
  function Badge(p) {
    return h('span', { className: cx('fu-badge', 'fu-badge-' + (p.tone || 'sage'), p.className) },
      p.icon ? h(Icon, { name: p.icon, size: 14 }) : null, p.children);
  }

  /* ---------- Headline with one italic accent phrase ---------- */
  function Headline(p) {
    var Tag = p.as || 'h2';
    return h(Tag, { className: cx('fu-headline', 'fu-headline-' + (p.size || 'lg'), p.className) },
      p.title, p.accent ? ' ' : null, p.accent ? h('em', { className: 'fu-accent' }, p.accent) : null);
  }

  /* ---------- SiteHeader ---------- */
  function SiteHeader(p) {
    var links = p.links || [];
    return h('header', { className: 'fu-header' },
      h('a', { className: 'fu-header-home', href: p.homeHref || '/', 'aria-label': 'Fired Up home' }, h(Logo, { logo: p.logo, width: 124 })),
      h('nav', { className: 'fu-header-nav', 'aria-label': 'Main' },
        links.map(function (l, i) { return h('a', { key: i, href: l.href, className: cx('fu-navlink', l.current && 'is-current'), 'aria-current': l.current ? 'page' : undefined }, l.label); })),
      h('div', { className: 'fu-header-actions' },
        p.phone ? h('a', { className: 'fu-header-phone', href: 'tel:' + String(p.phone).replace(/\s/g, '') }, h(Icon, { name: 'phone', size: 18 }), h('span', null, p.phone)) : null,
        p.cta ? h(Button, { href: p.cta.href, size: 'md' }, p.cta.label) : null));
  }

  /* ---------- Hero: copy left, arched photo right ---------- */
  function Hero(p) {
    return h('section', { className: 'fu-hero' },
      h('div', { className: 'fu-hero-copy' },
        p.eyebrow ? h('p', { className: 'fu-eyebrow' }, p.eyebrow) : null,
        h(Headline, { as: 'h1', size: p.size || 'xl', title: p.title, accent: p.accent }),
        p.lead ? h('p', { className: 'fu-lead' }, p.lead) : null,
        (p.primary || p.secondary) ? h('div', { className: 'fu-actions' },
          p.primary ? h(Button, { href: p.primary.href, size: 'lg', iconAfter: 'arrow' }, p.primary.label) : null,
          p.secondary ? h(Button, { href: p.secondary.href, size: 'lg', variant: 'secondary' }, p.secondary.label) : null) : null,
        p.note ? h('p', { className: 'fu-hero-note' }, h(Icon, { name: 'calendar', size: 16 }), p.note) : null),
      p.image ? h('figure', { className: 'fu-hero-media' },
        h('img', { src: p.image, alt: p.imageAlt || '' }),
        p.badge ? h('div', { className: 'fu-hero-badge' }, h(Badge, { tone: 'amber' }, p.badge)) : null) : null);
  }

  /* ---------- ProofStrip ---------- */
  function ProofStrip(p) {
    var items = p.items || [];
    return h('ul', { className: 'fu-proof' },
      items.map(function (it, i) {
        return h('li', { key: i, className: 'fu-proof-item' },
          h('span', { className: 'fu-proof-icon' }, h(Icon, { name: it.icon || 'check', size: 22 })),
          h('span', { className: 'fu-proof-text' }, h('strong', null, it.title), it.text ? h('span', null, it.text) : null));
      }));
  }

  /* ---------- ServiceTile ---------- */
  function ServiceTile(p) {
    var soon = p.status === 'soon';
    var inner = [
      h('span', { key: 'i', className: 'fu-tile-icon' }, h(Icon, { name: p.icon || 'flame', size: 28 })),
      h('span', { key: 't', className: 'fu-tile-title' }, p.title),
      p.text ? h('span', { key: 'x', className: 'fu-tile-text' }, p.text) : null,
      soon ? h(Badge, { key: 'b', tone: 'outline' }, 'Coming soon') : h('span', { key: 'm', className: 'fu-tile-more' }, p.linkLabel || 'Explore', h(Icon, { name: 'arrow', size: 16 }))
    ];
    if (p.href && !soon) return h('a', { className: 'fu-tile', href: p.href }, inner);
    return h('div', { className: cx('fu-tile', soon && 'is-soon') }, inner);
  }

  /* ---------- ProductCard ---------- */
  function ProductCard(p) {
    var specs = p.specs || [];
    return h('article', { className: 'fu-product' },
      h('div', { className: 'fu-product-media' },
        p.image ? h('img', { src: p.image, alt: p.imageAlt || '', style: p.imagePosition ? { objectPosition: p.imagePosition } : undefined }) : null,
        p.badge ? h('div', { className: 'fu-product-badge' }, h(Badge, { tone: p.badgeTone || 'amber' }, p.badge)) : null),
      h('div', { className: 'fu-product-body' },
        p.type ? h('p', { className: 'fu-eyebrow fu-eyebrow-sm' }, p.type) : null,
        h('h3', { className: 'fu-product-name' }, p.href ? h('a', { href: p.href }, p.name) : p.name),
        p.text ? h('p', { className: 'fu-product-text' }, p.text) : null,
        specs.length ? h('ul', { className: 'fu-specs' }, specs.map(function (s, i) { return h('li', { key: i }, s); })) : null,
        h('div', { className: 'fu-product-foot' },
          p.price ? h('span', { className: 'fu-price' }, p.price) : h('span'),
          p.href ? h('span', { className: 'fu-product-more', 'aria-hidden': 'true' }, h(Icon, { name: 'arrow', size: 18 })) : null)));
  }

  /* ---------- ReviewCard ---------- */
  function ReviewCard(p) {
    var rating = Math.max(0, Math.min(5, p.rating == null ? 5 : p.rating));
    var stars = [];
    for (var i = 0; i < 5; i++) stars.push(h(Icon, { key: i, name: 'star', size: 18, className: i < rating ? 'is-on' : 'is-off' }));
    return h('figure', { className: 'fu-review' },
      h('div', { className: 'fu-stars', role: 'img', 'aria-label': 'Rated ' + rating + ' out of 5' }, stars),
      h('blockquote', { className: 'fu-review-quote' }, h('p', null, '“' + p.quote + '”')),
      h('figcaption', { className: 'fu-review-by' }, h('strong', null, p.name), p.town ? h('span', null, p.town) : null, p.source ? h('span', { className: 'fu-review-source' }, p.source) : null));
  }

  /* ---------- Field ---------- */
  function Field(p) {
    var id = p.id || ('fu-' + String(p.label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    var helpId = id + '-help';
    var errId = id + '-err';
    var described = [p.help ? helpId : null, p.error ? errId : null].filter(Boolean).join(' ') || undefined;
    var common = { id: id, name: p.name || id, className: 'fu-input', required: p.required, placeholder: p.placeholder, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': described, defaultValue: p.defaultValue };
    var control;
    if (p.as === 'textarea') control = h('textarea', Object.assign({ rows: p.rows || 4 }, common));
    else if (p.as === 'select') control = h('select', common, (p.options || []).map(function (o, i) { var v = typeof o === 'string' ? o : o.value; var l = typeof o === 'string' ? o : o.label; return h('option', { key: i, value: v }, l); }));
    else control = h('input', Object.assign({ type: p.type || 'text', autoComplete: p.autoComplete }, common));
    return h('div', { className: cx('fu-field', p.error && 'has-error', p.className) },
      h('label', { className: 'fu-label', htmlFor: id }, p.label, p.required ? h('span', { className: 'fu-req', 'aria-hidden': 'true' }, ' *') : null),
      control,
      p.help && !p.error ? h('p', { id: helpId, className: 'fu-help' }, p.help) : null,
      p.error ? h('p', { id: errId, className: 'fu-error' }, h(Icon, { name: 'alert', size: 16 }), p.error) : null);
  }

  /* ---------- SocialPost: 1080 artwork drawn at any size (em-based) ---------- */
  function SocialPost(p) {
    var v = p.variant || 'showcase';
    var size = p.size || 320;
    var story = v === 'story';
    var style = { width: size + 'px', height: (story ? Math.round(size * 16 / 9) : size) + 'px', fontSize: (size / 320 * 16) + 'px' };
    var logo = p.logo || {};
    var darkLogo = logo.onDark ? h('img', { className: 'fu-post-logo', src: logo.onDark, alt: 'Fired Up' }) : h('span', { className: 'fu-wordmark fu-post-wordmark' }, 'Fired Up');
    var lightLogo = logo.onLight ? h('img', { className: 'fu-post-logo', src: logo.onLight, alt: 'Fired Up' }) : h('span', { className: 'fu-wordmark fu-post-wordmark is-ink' }, 'Fired Up');
    if (v === 'offer') {
      return h('div', { className: 'fu-post fu-post-offer', style: style },
        p.badge ? h('span', { className: 'fu-post-pill fu-post-amber' }, p.badge) : h('span'),
        h('p', { className: 'fu-post-title' }, p.title, p.accent ? ' ' : null, p.accent ? h('em', null, p.accent) : null),
        h('div', { className: 'fu-post-foot' }, p.cta ? h('span', { className: 'fu-post-pill fu-post-ember' }, p.cta) : h('span'), lightLogo));
    }
    if (v === 'review') {
      var st = [];
      for (var i = 0; i < 5; i++) st.push(h(Icon, { key: i, name: 'star', size: 18, className: 'is-on' }));
      return h('div', { className: 'fu-post fu-post-review', style: style },
        h('div', { className: 'fu-stars', role: 'img', 'aria-label': 'Rated 5 out of 5' }, st),
        h('p', { className: 'fu-post-quote' }, '“' + (p.quote || '') + '”'),
        h('div', { className: 'fu-post-foot' }, h('span', { className: 'fu-post-by' }, [p.name, p.town].filter(Boolean).join(', ')), darkLogo));
    }
    if (story) {
      return h('div', { className: 'fu-post fu-post-story', style: style },
        p.image ? h('img', { className: 'fu-post-photo', src: p.image, alt: p.imageAlt || '' }) : h('div', { className: 'fu-post-photo' }),
        h('div', { className: 'fu-post-story-top' }, darkLogo),
        h('div', { className: 'fu-post-panel' },
          h('p', { className: 'fu-post-title' }, p.title, p.accent ? ' ' : null, p.accent ? h('em', null, p.accent) : null),
          p.cta ? h('span', { className: 'fu-post-pill fu-post-ember' }, p.cta) : null));
    }
    return h('div', { className: 'fu-post fu-post-showcase', style: style },
      p.image ? h('img', { className: 'fu-post-photo', src: p.image, alt: p.imageAlt || '' }) : h('div', { className: 'fu-post-photo' }),
      h('div', { className: 'fu-post-bar' }, darkLogo, p.label ? h('span', { className: 'fu-post-label' }, p.label) : null));
  }

  /* ---------- Shared menu pieces ---------- */
  function MenuItem(p) {
    var it = p.item;
    var soon = it.status === 'soon';
    var inner = [
      it.icon ? h('span', { key: 'i', className: 'fu-mi-icon' }, h(Icon, { name: it.icon, size: 22 })) : null,
      h('span', { key: 't', className: 'fu-mi-text' },
        h('span', { className: 'fu-mi-label' }, it.label, soon ? h(Badge, { tone: 'outline' }, 'Coming soon') : null),
        it.text ? h('span', { className: 'fu-mi-desc' }, it.text) : null)
    ];
    if (soon || !it.href) return h('div', { className: cx('fu-mi', soon && 'is-soon', p.compact && 'is-compact') }, inner);
    return h('a', { className: cx('fu-mi', p.compact && 'is-compact'), href: it.href, onClick: p.onNavigate }, inner);
  }

  function useEscape(active, onEscape) {
    React.useEffect(function () {
      if (!active) return undefined;
      function onKey(e) { if (e.key === 'Escape') onEscape(e); }
      document.addEventListener('keydown', onKey);
      return function () { document.removeEventListener('keydown', onKey); };
    }, [active, onEscape]);
  }

  /* ---------- MegaMenu: desktop header with full-width panels ---------- */
  function MegaMenu(p) {
    var sections = p.sections || [];
    var st = React.useState(p.defaultOpen || null);
    var open = st[0], setOpen = st[1];
    var rootRef = React.useRef(null);
    var triggerRefs = React.useRef({});
    var timer = React.useRef(null);
    var close = React.useCallback(function () {
      var was = open;
      setOpen(null);
      if (was && triggerRefs.current[was]) triggerRefs.current[was].focus();
    }, [open]);
    useEscape(!!open, close);
    React.useEffect(function () {
      if (!open) return undefined;
      function onDown(e) { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(null); }
      document.addEventListener('mousedown', onDown);
      return function () { document.removeEventListener('mousedown', onDown); };
    }, [open]);
    function hoverOpen(id) { clearTimeout(timer.current); timer.current = setTimeout(function () { setOpen(id); }, 120); }
    function hoverLeave() { clearTimeout(timer.current); if (p.hover !== false) timer.current = setTimeout(function () { setOpen(null); }, 220); }
    var current = sections.filter(function (s) { return s.id === open; })[0];
    return h('div', { className: 'fu-mega', ref: rootRef, onMouseLeave: p.hover === false ? undefined : hoverLeave, onMouseEnter: function () { clearTimeout(timer.current); } },
      h('header', { className: 'fu-header fu-mega-bar' },
        h('a', { className: 'fu-header-home', href: p.homeHref || '/', 'aria-label': 'Fired Up home' }, h(Logo, { logo: p.logo, width: 124 })),
        h('nav', { className: 'fu-header-nav fu-mega-nav', 'aria-label': 'Main' },
          sections.map(function (s) {
            var isOpen = open === s.id;
            return h('button', {
              key: s.id, type: 'button', className: cx('fu-navlink', 'fu-mega-trigger', isOpen && 'is-open'),
              'aria-expanded': isOpen ? 'true' : 'false', 'aria-controls': 'fu-mega-' + s.id,
              ref: function (el) { triggerRefs.current[s.id] = el; },
              onClick: function () { setOpen(isOpen ? null : s.id); },
              onMouseEnter: p.hover === false ? undefined : function () { hoverOpen(s.id); }
            }, s.label, h(Icon, { name: 'chevron', size: 16, className: 'fu-mega-chev' }));
          }),
          (p.links || []).map(function (l, i) { return h('a', { key: 'l' + i, href: l.href, className: cx('fu-navlink', l.current && 'is-current') }, l.label); })),
        h('div', { className: 'fu-header-actions' },
          p.phone ? h('a', { className: 'fu-header-phone', href: 'tel:' + String(p.phone).replace(/\s/g, '') }, h(Icon, { name: 'phone', size: 18 }), h('span', null, p.phone)) : null,
          p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null)),
      current ? h('div', { className: 'fu-mega-panel', id: 'fu-mega-' + current.id, role: 'region', 'aria-label': current.label },
        h('div', { className: cx('fu-mega-inner', current.feature && 'has-feature') },
          h('div', { className: 'fu-mega-groups' },
            (current.groups || []).map(function (g, gi) {
              return h('div', { key: gi, className: 'fu-mega-group' },
                g.title ? h('p', { className: 'fu-eyebrow fu-eyebrow-sm' }, g.title) : null,
                h('div', { className: cx('fu-mega-items', g.columns === 3 && 'is-3') },
                  (g.items || []).map(function (it, ii) { return h(MenuItem, { key: ii, item: it, compact: !it.text, onNavigate: function () { setOpen(null); } }); })));
            })),
          current.feature ? h('aside', { className: 'fu-mega-feature' },
            current.feature.image ? h('div', { className: 'fu-mega-feature-media' },
              h('img', { src: current.feature.image, alt: current.feature.imageAlt || '' }),
              current.feature.badge ? h('div', { className: 'fu-hero-badge' }, h(Badge, { tone: 'amber' }, current.feature.badge)) : null) : null,
            h('div', { className: 'fu-mega-feature-copy' },
              current.feature.eyebrow ? h('p', { className: 'fu-eyebrow fu-eyebrow-sm' }, current.feature.eyebrow) : null,
              h(Headline, { as: 'p', size: 'feature', title: current.feature.title, accent: current.feature.accent }),
              current.feature.cta ? h(Button, { href: current.feature.cta.href, iconAfter: 'arrow' }, current.feature.cta.label) : null)) : null),
        current.footer ? h('div', { className: 'fu-mega-foot' },
          h('span', null, current.footer.text),
          current.footer.link ? h(Button, { variant: 'ghost', href: current.footer.link.href, iconAfter: 'arrow' }, current.footer.link.label) : null) : null) : null);
  }

  /* ---------- MobileMenu: bar + full-screen sheet ---------- */
  function MobileMenu(p) {
    var sections = p.sections || [];
    var os = React.useState(!!p.defaultOpen);
    var open = os[0], setOpen = os[1];
    var ex = React.useState(p.defaultExpanded || null);
    var expanded = ex[0], setExpanded = ex[1];
    var menuBtn = React.useRef(null);
    var sheet = React.useRef(null);
    var closeBtn = React.useRef(null);
    var first = React.useRef(true);
    var close = React.useCallback(function () { setOpen(false); }, []);
    useEscape(open, close);
    React.useEffect(function () {
      if (first.current) { first.current = false; return; }
      if (open && closeBtn.current) closeBtn.current.focus();
      if (!open && menuBtn.current) menuBtn.current.focus();
    }, [open]);
    React.useEffect(function () {
      if (!open || p.inline) return undefined;
      var prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return function () { document.body.style.overflow = prev; };
    }, [open, p.inline]);
    function trap(e) {
      if (e.key !== 'Tab' || !sheet.current) return;
      var f = sheet.current.querySelectorAll('a[href], button:not([disabled])');
      if (!f.length) return;
      var a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
    var tel = p.phone ? 'tel:' + String(p.phone).replace(/\s/g, '') : null;
    return h('div', { className: cx('fu-mobile', p.inline && 'is-inline') },
      h('div', { className: 'fu-mbar' },
        h('a', { className: 'fu-header-home', href: p.homeHref || '/', 'aria-label': 'Fired Up home' }, h(Logo, { logo: p.logo, width: 108 })),
        h('div', { className: 'fu-mbar-actions' },
          tel ? h('a', { className: 'fu-iconbtn', href: tel, 'aria-label': 'Call Fired Up' }, h(Icon, { name: 'phone', size: 22 })) : null,
          h('button', { type: 'button', className: 'fu-iconbtn', ref: menuBtn, 'aria-expanded': open ? 'true' : 'false', 'aria-controls': 'fu-msheet', 'aria-label': 'Open menu', onClick: function () { setOpen(true); } }, h(Icon, { name: 'menu', size: 24 })))),
      open ? h('div', { className: 'fu-msheet', id: 'fu-msheet', role: 'dialog', 'aria-modal': p.inline ? undefined : 'true', 'aria-label': 'Menu', ref: sheet, onKeyDown: trap },
        h('div', { className: 'fu-mbar' },
          h('a', { className: 'fu-header-home', href: p.homeHref || '/', 'aria-label': 'Fired Up home' }, h(Logo, { logo: p.logo, width: 108 })),
          h('button', { type: 'button', className: 'fu-iconbtn', ref: closeBtn, 'aria-label': 'Close menu', onClick: close }, h(Icon, { name: 'close', size: 24 }))),
        h('nav', { className: 'fu-msheet-body', 'aria-label': 'Main' },
          sections.map(function (s) {
            var isX = expanded === s.id;
            var items = [];
            (s.groups || []).forEach(function (g) { (g.items || []).forEach(function (it) { items.push(it); }); });
            return h('div', { key: s.id, className: 'fu-acc' },
              h('button', { type: 'button', className: cx('fu-acc-btn', isX && 'is-open'), 'aria-expanded': isX ? 'true' : 'false', 'aria-controls': 'fu-acc-' + s.id, onClick: function () { setExpanded(isX ? null : s.id); } },
                h('span', null, s.label), h(Icon, { name: 'chevron', size: 22, className: 'fu-acc-chev' })),
              isX ? h('div', { className: 'fu-acc-panel', id: 'fu-acc-' + s.id },
                items.map(function (it, i) { return h(MenuItem, { key: i, item: { icon: it.icon, label: it.label, href: it.href, status: it.status }, compact: true, onNavigate: close }); }),
                s.footer && s.footer.link ? h(Button, { variant: 'ghost', href: s.footer.link.href, iconAfter: 'arrow', onClick: close }, s.footer.link.label) : null) : null);
          }),
          (p.links || []).map(function (l, i) { return h('a', { key: 'l' + i, className: 'fu-acc-btn fu-acc-link', href: l.href, onClick: close }, h('span', null, l.label)); })),
        h('div', { className: 'fu-msheet-foot' },
          p.cta ? h(Button, { href: p.cta.href, size: 'lg', className: 'fu-btn-block', onClick: close }, p.cta.label) : null,
          tel ? h(Button, { href: tel, size: 'lg', variant: 'secondary', icon: 'phone', className: 'fu-btn-block' }, 'Call ' + p.phone) : null,
          p.note ? h('p', { className: 'fu-msheet-note' }, h(Icon, { name: 'pin', size: 16 }), p.note) : null)) : null);
  }

  /* ---------- AnnouncementBar ---------- */
  function AnnouncementBar(p) {
    var s = React.useState(false), hidden = s[0], setHidden = s[1];
    if (hidden) return null;
    return h('div', { className: 'fu-announce', role: 'region', 'aria-label': 'Announcement' },
      h('p', { className: 'fu-announce-text' },
        p.icon ? h(Icon, { name: p.icon, size: 18 }) : null,
        h('span', null, p.children),
        p.link ? h('a', { href: p.link.href }, p.link.label) : null),
      p.dismissible ? h('button', { type: 'button', className: 'fu-announce-x', 'aria-label': 'Dismiss announcement', onClick: function () { setHidden(true); } }, h(Icon, { name: 'close', size: 18 })) : null);
  }

  /* ---------- Breadcrumbs ---------- */
  function Breadcrumbs(p) {
    var items = p.items || [];
    return h('nav', { className: 'fu-crumbs', 'aria-label': 'Breadcrumb' },
      h('ol', null, items.map(function (it, i) {
        var last = i === items.length - 1;
        return h('li', { key: i },
          last || !it.href ? h('span', { 'aria-current': last ? 'page' : undefined }, it.label) : h('a', { href: it.href }, it.label),
          last ? null : h('span', { className: 'fu-crumbs-sep', 'aria-hidden': 'true' }, '/'));
      })));
  }

  /* ---------- SectionHeader ---------- */
  function SectionHeader(p) {
    return h('div', { className: cx('fu-sechead', p.align === 'center' && 'is-center') },
      h('div', { className: 'fu-sechead-copy' },
        p.eyebrow ? h('p', { className: 'fu-eyebrow' }, p.eyebrow) : null,
        h(Headline, { as: p.as || 'h2', size: p.size || 'md', title: p.title, accent: p.accent }),
        p.lead ? h('p', { className: 'fu-lead' }, p.lead) : null),
      p.action ? h(Button, { variant: 'ghost', href: p.action.href, iconAfter: 'arrow' }, p.action.label) : null);
  }

  /* ---------- Slideshow ---------- */
  function Slideshow(p) {
    var slides = p.slides || [];
    var n = slides.length;
    var st = React.useState(0), i = st[0], setI = st[1];
    var drag = React.useRef(null);
    var label = p.label || 'Gallery';
    function go(k) { setI(((k % n) + n) % n); }
    React.useEffect(function () {
      if (!p.autoPlay || n < 2) return undefined;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return undefined;
      var t = setInterval(function () { setI(function (x) { return (x + 1) % n; }); }, p.interval || 6000);
      return function () { clearInterval(t); };
    }, [p.autoPlay, n, p.interval]);
    function onKey(e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
    }
    function down(e) { drag.current = e.clientX; }
    function up(e) { if (drag.current == null) return; var dx = e.clientX - drag.current; drag.current = null; if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1); }
    return h('section', { className: cx('fu-slides', 'fu-slides-' + (p.variant || 'image')), 'aria-roledescription': 'carousel', 'aria-label': label },
      h('div', { className: 'fu-slides-viewport', tabIndex: 0, onKeyDown: onKey, onPointerDown: down, onPointerUp: up, 'aria-label': label + ': use the arrow keys to move between slides' },
        h('div', { className: 'fu-slides-track', style: { transform: 'translateX(' + (-i * 100) + '%)' } },
          slides.map(function (s, k) {
            return h('div', { key: k, className: 'fu-slide', role: 'group', 'aria-roledescription': 'slide', 'aria-label': (k + 1) + ' of ' + n, 'aria-hidden': k === i ? undefined : 'true' },
              s.image ? h('img', { src: s.image, alt: s.alt || '', draggable: false, style: s.position ? { objectPosition: s.position } : undefined }) : null,
              s.content ? h('div', { className: 'fu-slide-content' }, s.content) : null,
              s.caption ? h('p', { className: 'fu-slide-cap' }, s.caption) : null);
          }))),
      n > 1 ? h('div', { className: 'fu-slides-controls' },
        h('button', { type: 'button', className: 'fu-iconbtn', 'aria-label': 'Previous slide', onClick: function () { go(i - 1); } }, h(Icon, { name: 'arrow', size: 20, className: 'fu-flip' })),
        p.thumbnails ? h('div', { className: 'fu-thumbs' }, slides.map(function (s, k) {
          return h('button', { key: k, type: 'button', className: cx('fu-thumb', k === i && 'is-on'), 'aria-label': 'Show slide ' + (k + 1), 'aria-current': k === i ? 'true' : undefined, onClick: function () { go(k); } }, s.image ? h('img', { src: s.image, alt: '' }) : null);
        })) : h('div', { className: 'fu-dots' }, slides.map(function (s, k) {
          return h('button', { key: k, type: 'button', className: cx('fu-dot', k === i && 'is-on'), 'aria-label': 'Show slide ' + (k + 1), 'aria-current': k === i ? 'true' : undefined, onClick: function () { go(k); } });
        })),
        h('span', { className: 'fu-slides-count', 'aria-live': 'polite' }, (i + 1) + ' / ' + n),
        h('button', { type: 'button', className: 'fu-iconbtn', 'aria-label': 'Next slide', onClick: function () { go(i + 1); } }, h(Icon, { name: 'arrow', size: 20 }))) : null);
  }

  /* ---------- SpecTable ---------- */
  function SpecTable(p) {
    var cols = p.columns || null;
    return h('div', { className: 'fu-spec-wrap' },
      h('table', { className: cx('fu-spec', cols && 'is-compare') },
        p.caption ? h('caption', null, p.caption) : null,
        cols ? h('thead', null, h('tr', null, h('td', null), cols.map(function (c, i) { return h('th', { key: i, scope: 'col' }, c); }))) : null,
        h('tbody', null, (p.rows || []).map(function (r, i) {
          var vals = Array.isArray(r.values) ? r.values : [r.value];
          return h('tr', { key: i }, h('th', { scope: 'row' }, r.label), vals.map(function (v, j) { return h('td', { key: j }, v); }));
        }))));
  }

  /* ---------- Tabs ---------- */
  function Tabs(p) {
    var tabs = p.tabs || [];
    var st = React.useState(p.defaultTab || (tabs[0] && tabs[0].id)), cur = st[0], setCur = st[1];
    var refs = React.useRef({});
    var uid = p.id || 'fu-tabs';
    function onKey(e, k) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var nx = tabs[(k + d + tabs.length) % tabs.length].id;
      setCur(nx); if (refs.current[nx]) refs.current[nx].focus();
    }
    return h('div', { className: 'fu-tabs' },
      h('div', { className: 'fu-tablist', role: 'tablist', 'aria-label': p.label || 'Details' },
        tabs.map(function (t, k) {
          var on = t.id === cur;
          return h('button', { key: t.id, type: 'button', role: 'tab', id: uid + '-t-' + t.id, 'aria-selected': on ? 'true' : 'false', 'aria-controls': uid + '-p-' + t.id, tabIndex: on ? 0 : -1, className: cx('fu-tab', on && 'is-on'), ref: function (el) { refs.current[t.id] = el; }, onClick: function () { setCur(t.id); }, onKeyDown: function (e) { onKey(e, k); } }, t.label);
        })),
      tabs.map(function (t) {
        return t.id === cur ? h('div', { key: t.id, role: 'tabpanel', id: uid + '-p-' + t.id, 'aria-labelledby': uid + '-t-' + t.id, tabIndex: 0, className: 'fu-tabpanel' }, t.content) : null;
      }));
  }

  /* ---------- Accordion (FAQ) ---------- */
  function Accordion(p) {
    var items = p.items || [];
    var st = React.useState(p.defaultOpen == null ? -1 : p.defaultOpen), open = st[0], setOpen = st[1];
    var uid = p.id || 'fu-faq';
    return h('div', { className: 'fu-faq' }, items.map(function (it, k) {
      var on = open === k;
      var Head = p.headingLevel || 'h3';
      return h('div', { key: k, className: cx('fu-faq-item', on && 'is-open') },
        h(Head, { className: 'fu-faq-h' },
          h('button', { type: 'button', className: 'fu-faq-btn', 'aria-expanded': on ? 'true' : 'false', 'aria-controls': uid + '-' + k, id: uid + '-b-' + k, onClick: function () { setOpen(on ? -1 : k); } },
            h('span', null, it.question), h('span', { className: 'fu-faq-sign', 'aria-hidden': 'true' }))),
        on ? h('div', { className: 'fu-faq-a', id: uid + '-' + k, role: 'region', 'aria-labelledby': uid + '-b-' + k }, typeof it.answer === 'string' ? h('p', null, it.answer) : it.answer) : null);
    }));
  }

  /* ---------- ProcessSteps ---------- */
  function ProcessSteps(p) {
    var steps = p.steps || [];
    return h('ol', { className: 'fu-steps' }, steps.map(function (s, k) {
      return h('li', { key: k, className: 'fu-step' },
        h('span', { className: 'fu-step-num', 'aria-hidden': 'true' }, String(k + 1).padStart(2, '0')),
        h('span', { className: 'fu-step-title' }, s.title),
        s.text ? h('span', { className: 'fu-step-text' }, s.text) : null);
    }));
  }

  /* ---------- CTABanner ---------- */
  function CTABanner(p) {
    var v = p.variant || 'iron';
    var onSage = v === 'sage';
    return h('section', { className: cx('fu-cta', 'fu-cta-' + v, p.image && 'has-image') },
      h('div', { className: 'fu-cta-copy' },
        p.eyebrow ? h('p', { className: 'fu-eyebrow' }, p.eyebrow) : null,
        h(Headline, { as: 'h2', size: 'md', title: p.title, accent: p.accent }),
        p.text ? h('p', { className: 'fu-cta-text' }, p.text) : null,
        h('div', { className: 'fu-actions' },
          p.primary ? h(Button, { href: p.primary.href, size: 'lg', variant: onSage ? 'dark' : 'primary', iconAfter: 'arrow' }, p.primary.label) : null,
          p.secondary ? h(Button, { href: p.secondary.href, size: 'lg', variant: onSage ? 'onsage' : 'secondary', icon: p.secondary.icon }, p.secondary.label) : null)),
      p.image ? h('div', { className: 'fu-cta-media' }, h('img', { src: p.image, alt: p.imageAlt || '' })) : null);
  }

  /* ---------- EnquiryForm ---------- */
  function EnquiryForm(p) {
    var st = React.useState(p.defaultSent ? { name: p.defaultSent } : null), sent = st[0], setSent = st[1];
    var es = React.useState({}), errs = es[0], setErrs = es[1];
    var uid = p.id || 'fu-enq';
    function submit(e) {
      e.preventDefault();
      var f = e.currentTarget, name = f.elements.name.value.trim(), phone = f.elements.phone.value.replace(/\s/g, '');
      var next = {};
      if (!name) next.name = 'Enter your name';
      if (!/^(\+44|0)\d{9,10}$/.test(phone)) next.phone = 'Enter a full UK phone number, like 01225 123456';
      setErrs(next);
      if (Object.keys(next).length) { var first = f.elements[Object.keys(next)[0]]; if (first) first.focus(); return; }
      if (p.onSubmit) p.onSubmit({ name: name, phone: phone, postcode: f.elements.postcode.value, interest: f.elements.interest.value, message: f.elements.message.value });
      setSent({ name: name.split(' ')[0] });
    }
    if (sent) {
      return h('div', { className: 'fu-enq fu-enq-done', role: 'status' },
        h('span', { className: 'fu-enq-tick' }, h(Icon, { name: 'check', size: 28 })),
        h(Headline, { as: 'h2', size: 'feature', title: 'Thanks, ' + sent.name + '.', accent: 'We’ll be in touch.' }),
        h('p', { className: 'fu-lead' }, p.successText || 'We’ll call you to talk through your room and book a time that suits.'),
        h(Button, { variant: 'ghost', iconAfter: 'arrow', onClick: function () { setSent(null); } }, 'Send another enquiry'));
    }
    return h('form', { className: 'fu-enq', noValidate: true, onSubmit: submit },
      p.title ? h(Headline, { as: 'h2', size: 'feature', title: p.title, accent: p.accent }) : null,
      p.intro ? h('p', { className: 'fu-enq-intro' }, p.intro) : null,
      h('div', { className: 'fu-enq-grid' },
        h(Field, { id: uid + '-name', name: 'name', label: 'Your name', required: true, autoComplete: 'name', error: errs.name }),
        h(Field, { id: uid + '-phone', name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel', error: errs.phone, help: 'We’ll call you, usually the same day.' }),
        h(Field, { id: uid + '-postcode', name: 'postcode', label: 'Postcode', autoComplete: 'postal-code', help: 'So we know which area you are in.' }),
        h(Field, { id: uid + '-interest', name: 'interest', label: 'I’m interested in', as: 'select', options: p.interests || ['Wood-burning stove', 'Fireplace', 'Gas fire', 'Electric fire', 'Bioethanol fire', 'Outdoor fire', 'Air conditioning', 'Not sure yet'] }),
        h(Field, { id: uid + '-message', name: 'message', label: 'Tell us about your room', as: 'textarea', className: 'fu-enq-full', placeholder: 'Room size, existing chimney or flue, anything you have seen and liked' })),
      h('div', { className: 'fu-enq-foot' },
        h(Button, { type: 'submit', size: 'lg' }, p.submitLabel || 'Request a free consultation'),
        p.privacy ? h('p', { className: 'fu-help' }, p.privacy) : null));
  }

  /* ---------- ShowroomCard ---------- */
  function ShowroomCard(p) {
    return h('section', { className: 'fu-showroom' },
      p.image ? h('div', { className: 'fu-showroom-media' }, h('img', { src: p.image, alt: p.imageAlt || '' })) : null,
      h('div', { className: 'fu-showroom-body' },
        h('p', { className: 'fu-eyebrow fu-eyebrow-sm' }, p.eyebrow || 'Visit the showroom'),
        h(Headline, { as: 'h2', size: 'feature', title: p.title || 'Come and see them', accent: p.accent || 'lit.' }),
        h('ul', { className: 'fu-showroom-list' },
          p.address ? h('li', null, h(Icon, { name: 'pin', size: 20 }), h('span', null, (Array.isArray(p.address) ? p.address : [p.address]).map(function (l, i) { return h('span', { key: i, className: 'fu-line' }, l); }))) : null,
          p.hours ? h('li', null, h(Icon, { name: 'calendar', size: 20 }), h('span', null, p.hours)) : null,
          p.phone ? h('li', null, h(Icon, { name: 'phone', size: 20 }), h('a', { href: 'tel:' + String(p.phone).replace(/\s/g, '') }, p.phone)) : null),
        h('div', { className: 'fu-actions' },
          p.cta ? h(Button, { href: p.cta.href }, p.cta.label) : null,
          p.mapHref ? h(Button, { href: p.mapHref, variant: 'secondary', icon: 'pin' }, 'Get directions') : null)));
  }

  /* ---------- FilterBar ---------- */
  function FilterBar(p) {
    var opts = p.options || [];
    var st = React.useState(p.defaultSelected || []), sel = st[0], setSel = st[1];
    function toggle(v) {
      var next = sel.indexOf(v) >= 0 ? sel.filter(function (x) { return x !== v; }) : sel.concat([v]);
      setSel(next); if (p.onChange) p.onChange(next);
    }
    return h('div', { className: 'fu-filters' },
      h('div', { className: 'fu-filters-chips', role: 'group', 'aria-label': p.label || 'Filter by type' },
        opts.map(function (o, k) {
          var on = sel.indexOf(o.value) >= 0;
          return h('button', { key: k, type: 'button', className: cx('fu-chip', on && 'is-on'), 'aria-pressed': on ? 'true' : 'false', onClick: function () { toggle(o.value); } },
            o.icon ? h(Icon, { name: o.icon, size: 18 }) : null, o.label, on ? h(Icon, { name: 'check', size: 16 }) : null);
        }),
        sel.length ? h('button', { type: 'button', className: 'fu-chip-clear', onClick: function () { setSel([]); if (p.onChange) p.onChange([]); } }, 'Clear') : null),
      h('div', { className: 'fu-filters-meta' },
        p.count != null ? h('span', { className: 'fu-filters-count', 'aria-live': 'polite' }, p.count + ' products') : null,
        p.sortOptions ? h('label', { className: 'fu-sort' }, h('span', null, 'Sort'),
          h('select', { className: 'fu-input fu-sort-select', defaultValue: p.sortOptions[0] }, p.sortOptions.map(function (s, k) { return h('option', { key: k }, s); }))) : null));
  }

  /* ---------- ArticleCard ---------- */
  function ArticleCard(p) {
    return h('article', { className: 'fu-article' },
      p.image ? h('div', { className: 'fu-article-media' }, h('img', { src: p.image, alt: p.imageAlt || '' })) : null,
      h('div', { className: 'fu-article-body' },
        h('p', { className: 'fu-eyebrow fu-eyebrow-sm' }, [p.category, p.readTime].filter(Boolean).join(' · ')),
        h('h3', { className: 'fu-article-title' }, p.href ? h('a', { href: p.href }, p.title) : p.title),
        p.excerpt ? h('p', { className: 'fu-article-text' }, p.excerpt) : null,
        h('span', { className: 'fu-tile-more', 'aria-hidden': 'true' }, 'Read the guide', h(Icon, { name: 'arrow', size: 16 }))));
  }

  /* ---------- StickyCTA (phones) ---------- */
  function StickyCTA(p) {
    return h('div', { className: cx('fu-sticky', p.inline && 'is-inline') },
      p.phone ? h(Button, { href: 'tel:' + String(p.phone).replace(/\s/g, ''), variant: 'secondary', icon: 'phone', className: 'fu-btn-block' }, 'Call') : null,
      p.cta ? h(Button, { href: p.cta.href, className: 'fu-btn-block' }, p.cta.label) : null);
  }

  /* ---------- ProductDetail ---------- */
  function ProductDetail(p) {
    var gallery = (p.gallery || []).map(function (g) { return { image: g.image, alt: g.alt, position: g.position }; });
    return h('section', { className: 'fu-pd' },
      h('div', { className: 'fu-pd-media' }, h(Slideshow, { slides: gallery, thumbnails: true, label: (p.name || 'Product') + ' photos' })),
      h('div', { className: 'fu-pd-info' },
        p.type ? h('p', { className: 'fu-eyebrow' }, p.type) : null,
        h('h1', { className: 'fu-pd-name' }, p.name),
        p.lead ? h('p', { className: 'fu-lead' }, p.lead) : null,
        p.specs && p.specs.length ? h('ul', { className: 'fu-specs' }, p.specs.map(function (s, i) { return h('li', { key: i }, s); })) : null,
        h('div', { className: 'fu-pd-price' },
          p.price ? h('span', { className: 'fu-price fu-price-lg' }, p.price) : null,
          p.badge ? h(Badge, { tone: 'amber' }, p.badge) : null),
        p.priceNote ? h('p', { className: 'fu-help' }, p.priceNote) : null,
        h('div', { className: 'fu-actions' },
          p.primary ? h(Button, { href: p.primary.href, size: 'lg', iconAfter: 'arrow' }, p.primary.label) : null,
          p.secondary ? h(Button, { href: p.secondary.href, size: 'lg', variant: 'secondary' }, p.secondary.label) : null),
        p.points && p.points.length ? h('ul', { className: 'fu-pd-points' }, p.points.map(function (pt, i) { return h('li', { key: i }, h(Icon, { name: 'check', size: 18 }), h('span', null, pt)); })) : null));
  }

  /* ---------- Footer ---------- */
  function Footer(p) {
    var cols = p.columns || [];
    return h('footer', { className: 'fu-footer' },
      h('div', { className: 'fu-footer-top' },
        h('div', { className: 'fu-footer-brand' },
          h(Logo, { logo: p.logo, width: 156 }),
          p.tagline ? h('p', { className: 'fu-footer-tagline' }, p.tagline) : null,
          p.areas ? h('p', { className: 'fu-footer-areas' }, h(Icon, { name: 'pin', size: 16 }), p.areas) : null),
        cols.map(function (c, i) {
          return h('nav', { key: i, className: 'fu-footer-col', 'aria-label': c.title },
            h('p', { className: 'fu-eyebrow fu-eyebrow-sm' }, c.title),
            h('ul', null, (c.links || []).map(function (l, j) { return h('li', { key: j }, l.href ? h('a', { href: l.href }, l.label) : l.label); })));
        })),
      h('div', { className: 'fu-footer-base' },
        p.address ? h('span', null, p.address) : null,
        p.legal ? h('span', null, p.legal) : null));
  }

  var api = { Button: Button, Badge: Badge, Icon: Icon, SiteHeader: SiteHeader, Hero: Hero, ProofStrip: ProofStrip, ServiceTile: ServiceTile, ProductCard: ProductCard, ReviewCard: ReviewCard, Field: Field, SocialPost: SocialPost, Footer: Footer, MegaMenu: MegaMenu, MobileMenu: MobileMenu, AnnouncementBar: AnnouncementBar, Breadcrumbs: Breadcrumbs, SectionHeader: SectionHeader, Slideshow: Slideshow, ProductDetail: ProductDetail, SpecTable: SpecTable, Tabs: Tabs, Accordion: Accordion, ProcessSteps: ProcessSteps, CTABanner: CTABanner, EnquiryForm: EnquiryForm, ShowroomCard: ShowroomCard, FilterBar: FilterBar, ArticleCard: ArticleCard, StickyCTA: StickyCTA, Headline: Headline, Logo: Logo };
  window.FiredUp = Object.assign(window.FiredUp || {}, api);
})();
