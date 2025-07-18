--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-07-18 19:06:45

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 230 (class 1259 OID 65714)
-- Name: client_keg_balance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client_keg_balance (
    client_id integer NOT NULL,
    keg_type_id integer NOT NULL,
    quantity integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.client_keg_balance OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 65704)
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 65703)
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clients_id_seq OWNER TO postgres;

--
-- TOC entry 4941 (class 0 OID 0)
-- Dependencies: 228
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- TOC entry 232 (class 1259 OID 65731)
-- Name: keg_sales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.keg_sales (
    id integer NOT NULL,
    client_id integer,
    keg_type_id integer,
    quantity integer NOT NULL,
    sale_date date DEFAULT CURRENT_DATE,
    comment text
);


ALTER TABLE public.keg_sales OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 65730)
-- Name: keg_sales_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.keg_sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.keg_sales_id_seq OWNER TO postgres;

--
-- TOC entry 4942 (class 0 OID 0)
-- Dependencies: 231
-- Name: keg_sales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.keg_sales_id_seq OWNED BY public.keg_sales.id;


--
-- TOC entry 222 (class 1259 OID 65639)
-- Name: keg_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.keg_types (
    id integer NOT NULL,
    volume integer NOT NULL,
    is_full boolean NOT NULL,
    description text
);


ALTER TABLE public.keg_types OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 65638)
-- Name: keg_types_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.keg_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.keg_types_id_seq OWNER TO postgres;

--
-- TOC entry 4943 (class 0 OID 0)
-- Dependencies: 221
-- Name: keg_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.keg_types_id_seq OWNED BY public.keg_types.id;


--
-- TOC entry 218 (class 1259 OID 65621)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    product_id_su integer NOT NULL,
    liters integer
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 65620)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- TOC entry 4944 (class 0 OID 0)
-- Dependencies: 217
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 223 (class 1259 OID 65647)
-- Name: stock_balance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stock_balance (
    warehouse_id integer NOT NULL,
    keg_type_id integer NOT NULL,
    quantity integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.stock_balance OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 65664)
-- Name: stock_in; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stock_in (
    id integer NOT NULL,
    warehouse_id integer,
    keg_type_id integer,
    quantity integer NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    comment text
);


ALTER TABLE public.stock_in OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 65663)
-- Name: stock_in_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stock_in_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.stock_in_id_seq OWNER TO postgres;

--
-- TOC entry 4945 (class 0 OID 0)
-- Dependencies: 224
-- Name: stock_in_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stock_in_id_seq OWNED BY public.stock_in.id;


--
-- TOC entry 227 (class 1259 OID 65684)
-- Name: stock_out; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stock_out (
    id integer NOT NULL,
    warehouse_id integer,
    keg_type_id integer,
    quantity integer NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    client_name text NOT NULL,
    comment text
);


ALTER TABLE public.stock_out OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 65683)
-- Name: stock_out_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stock_out_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.stock_out_id_seq OWNER TO postgres;

--
-- TOC entry 4946 (class 0 OID 0)
-- Dependencies: 226
-- Name: stock_out_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stock_out_id_seq OWNED BY public.stock_out.id;


--
-- TOC entry 220 (class 1259 OID 65630)
-- Name: warehouse; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.warehouse (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.warehouse OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 65629)
-- Name: warehouse_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.warehouse_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.warehouse_id_seq OWNER TO postgres;

--
-- TOC entry 4947 (class 0 OID 0)
-- Dependencies: 219
-- Name: warehouse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.warehouse_id_seq OWNED BY public.warehouse.id;


--
-- TOC entry 4741 (class 2604 OID 65707)
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- TOC entry 4743 (class 2604 OID 65734)
-- Name: keg_sales id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keg_sales ALTER COLUMN id SET DEFAULT nextval('public.keg_sales_id_seq'::regclass);


--
-- TOC entry 4735 (class 2604 OID 65642)
-- Name: keg_types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keg_types ALTER COLUMN id SET DEFAULT nextval('public.keg_types_id_seq'::regclass);


--
-- TOC entry 4733 (class 2604 OID 65624)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 4737 (class 2604 OID 65667)
-- Name: stock_in id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_in ALTER COLUMN id SET DEFAULT nextval('public.stock_in_id_seq'::regclass);


--
-- TOC entry 4739 (class 2604 OID 65687)
-- Name: stock_out id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_out ALTER COLUMN id SET DEFAULT nextval('public.stock_out_id_seq'::regclass);


--
-- TOC entry 4734 (class 2604 OID 65633)
-- Name: warehouse id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.warehouse ALTER COLUMN id SET DEFAULT nextval('public.warehouse_id_seq'::regclass);


--
-- TOC entry 4933 (class 0 OID 65714)
-- Dependencies: 230
-- Data for Name: client_keg_balance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.client_keg_balance (client_id, keg_type_id, quantity) FROM stdin;
\.


--
-- TOC entry 4932 (class 0 OID 65704)
-- Dependencies: 229
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, name) FROM stdin;
\.


--
-- TOC entry 4935 (class 0 OID 65731)
-- Dependencies: 232
-- Data for Name: keg_sales; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.keg_sales (id, client_id, keg_type_id, quantity, sale_date, comment) FROM stdin;
\.


--
-- TOC entry 4925 (class 0 OID 65639)
-- Dependencies: 222
-- Data for Name: keg_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.keg_types (id, volume, is_full, description) FROM stdin;
1	30	t	30 л. полная
2	30	f	30 л. пустая
3	20	t	20 л. полная
4	20	f	20 л. пустая
\.


--
-- TOC entry 4921 (class 0 OID 65621)
-- Dependencies: 218
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, product_id_su, liters) FROM stdin;
2	Zatecky Gus Nefiltrovany	2717308	30
3	Zatecky Gus Svetly	764432	30
4	Sarbast Original Unfiltered	470508	30
5	Sarbast Lite	470503	30
6	Sarbast Original	470495	30
7	Tuborg Green	470498	30
9	Жасур	30	4704981
\.


--
-- TOC entry 4926 (class 0 OID 65647)
-- Dependencies: 223
-- Data for Name: stock_balance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stock_balance (warehouse_id, keg_type_id, quantity) FROM stdin;
\.


--
-- TOC entry 4928 (class 0 OID 65664)
-- Dependencies: 225
-- Data for Name: stock_in; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stock_in (id, warehouse_id, keg_type_id, quantity, date, comment) FROM stdin;
\.


--
-- TOC entry 4930 (class 0 OID 65684)
-- Dependencies: 227
-- Data for Name: stock_out; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stock_out (id, warehouse_id, keg_type_id, quantity, date, client_name, comment) FROM stdin;
\.


--
-- TOC entry 4923 (class 0 OID 65630)
-- Dependencies: 220
-- Data for Name: warehouse; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.warehouse (id, name) FROM stdin;
\.


--
-- TOC entry 4948 (class 0 OID 0)
-- Dependencies: 228
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 1, false);


--
-- TOC entry 4949 (class 0 OID 0)
-- Dependencies: 231
-- Name: keg_sales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.keg_sales_id_seq', 1, false);


--
-- TOC entry 4950 (class 0 OID 0)
-- Dependencies: 221
-- Name: keg_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.keg_types_id_seq', 4, true);


--
-- TOC entry 4951 (class 0 OID 0)
-- Dependencies: 217
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 9, true);


--
-- TOC entry 4952 (class 0 OID 0)
-- Dependencies: 224
-- Name: stock_in_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stock_in_id_seq', 1, false);


--
-- TOC entry 4953 (class 0 OID 0)
-- Dependencies: 226
-- Name: stock_out_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stock_out_id_seq', 1, false);


--
-- TOC entry 4954 (class 0 OID 0)
-- Dependencies: 219
-- Name: warehouse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.warehouse_id_seq', 1, false);


--
-- TOC entry 4762 (class 2606 OID 65719)
-- Name: client_keg_balance client_keg_balance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client_keg_balance
    ADD CONSTRAINT client_keg_balance_pkey PRIMARY KEY (client_id, keg_type_id);


--
-- TOC entry 4758 (class 2606 OID 65713)
-- Name: clients clients_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_name_key UNIQUE (name);


--
-- TOC entry 4760 (class 2606 OID 65711)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- TOC entry 4764 (class 2606 OID 65739)
-- Name: keg_sales keg_sales_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keg_sales
    ADD CONSTRAINT keg_sales_pkey PRIMARY KEY (id);


--
-- TOC entry 4750 (class 2606 OID 65646)
-- Name: keg_types keg_types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keg_types
    ADD CONSTRAINT keg_types_pkey PRIMARY KEY (id);


--
-- TOC entry 4746 (class 2606 OID 65628)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 4752 (class 2606 OID 65652)
-- Name: stock_balance stock_balance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_balance
    ADD CONSTRAINT stock_balance_pkey PRIMARY KEY (warehouse_id, keg_type_id);


--
-- TOC entry 4754 (class 2606 OID 65672)
-- Name: stock_in stock_in_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_in
    ADD CONSTRAINT stock_in_pkey PRIMARY KEY (id);


--
-- TOC entry 4756 (class 2606 OID 65692)
-- Name: stock_out stock_out_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_out
    ADD CONSTRAINT stock_out_pkey PRIMARY KEY (id);


--
-- TOC entry 4748 (class 2606 OID 65637)
-- Name: warehouse warehouse_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.warehouse
    ADD CONSTRAINT warehouse_pkey PRIMARY KEY (id);


--
-- TOC entry 4771 (class 2606 OID 65720)
-- Name: client_keg_balance client_keg_balance_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client_keg_balance
    ADD CONSTRAINT client_keg_balance_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.clients(id);


--
-- TOC entry 4772 (class 2606 OID 65725)
-- Name: client_keg_balance client_keg_balance_keg_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client_keg_balance
    ADD CONSTRAINT client_keg_balance_keg_type_id_fkey FOREIGN KEY (keg_type_id) REFERENCES public.keg_types(id);


--
-- TOC entry 4773 (class 2606 OID 65740)
-- Name: keg_sales keg_sales_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keg_sales
    ADD CONSTRAINT keg_sales_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.clients(id);


--
-- TOC entry 4774 (class 2606 OID 65745)
-- Name: keg_sales keg_sales_keg_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keg_sales
    ADD CONSTRAINT keg_sales_keg_type_id_fkey FOREIGN KEY (keg_type_id) REFERENCES public.keg_types(id);


--
-- TOC entry 4765 (class 2606 OID 65658)
-- Name: stock_balance stock_balance_keg_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_balance
    ADD CONSTRAINT stock_balance_keg_type_id_fkey FOREIGN KEY (keg_type_id) REFERENCES public.keg_types(id);


--
-- TOC entry 4766 (class 2606 OID 65653)
-- Name: stock_balance stock_balance_warehouse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_balance
    ADD CONSTRAINT stock_balance_warehouse_id_fkey FOREIGN KEY (warehouse_id) REFERENCES public.warehouse(id);


--
-- TOC entry 4767 (class 2606 OID 65678)
-- Name: stock_in stock_in_keg_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_in
    ADD CONSTRAINT stock_in_keg_type_id_fkey FOREIGN KEY (keg_type_id) REFERENCES public.keg_types(id);


--
-- TOC entry 4768 (class 2606 OID 65673)
-- Name: stock_in stock_in_warehouse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_in
    ADD CONSTRAINT stock_in_warehouse_id_fkey FOREIGN KEY (warehouse_id) REFERENCES public.warehouse(id);


--
-- TOC entry 4769 (class 2606 OID 65698)
-- Name: stock_out stock_out_keg_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_out
    ADD CONSTRAINT stock_out_keg_type_id_fkey FOREIGN KEY (keg_type_id) REFERENCES public.keg_types(id);


--
-- TOC entry 4770 (class 2606 OID 65693)
-- Name: stock_out stock_out_warehouse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock_out
    ADD CONSTRAINT stock_out_warehouse_id_fkey FOREIGN KEY (warehouse_id) REFERENCES public.warehouse(id);


-- Completed on 2025-07-18 19:06:45

--
-- PostgreSQL database dump complete
--

