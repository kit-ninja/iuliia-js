import iuliia from "../../src/index";

test("schema names", () => {
    const names = iuliia.Schemas.names();
    expect(names).toEqual([
        "ala_lc",
        "ala_lc_alt",
        "bgn_pcgn",
        "bgn_pcgn_alt",
        "bs_2979",
        "bs_2979_alt",
        "gost_16876",
        "gost_16876_alt",
        "gost_52290",
        "gost_52535",
        "gost_7034",
        "gost_779",
        "gost_779_alt",
        "icao_doc_9303",
        "iso_9_1954",
        "iso_9_1968",
        "iso_9_1968_alt",
        "mvd_310",
        "mvd_310_fr",
        "mvd_782",
        "scientific",
        "telegram",
        "ungegn_1987",
        "wikipedia",
        "yandex_maps",
        "yandex_money",
    ]);
});

test("get schema by name", () => {
    const schema = iuliia.Schemas.get("wikipedia");
    expect(schema).toEqual(iuliia.WIKIPEDIA);
});

test("get schema by alias", () => {
    const schema = iuliia.Schemas.get("iso_9");
    expect(schema).toEqual(iuliia.GOST_779);
});

test("schema not found", () => {
    expect(() => {
        iuliia.Schemas.get("whatever");
    }).toThrowError("No such schema: whatever");
});

test("translate", () => {
    const schema = iuliia.Schemas.get("wikipedia");
    const translated = iuliia.translate("Юлия", schema);
    expect(translated).toBe("Yuliya");
});