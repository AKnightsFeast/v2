export enum OrderDirection {
    Vertical,
    Horizontal
};

export namespace Actions {
    export enum MonthlyMenuType {
        LOAD_MENU_DATES = "LOAD_MENU_DATES",
        LOAD_MENU_DATES_OK = "LOAD_MENU_DATES_OK",
        LOAD_MENU_DATES_ERR = "LOAD_MENU_DATES_ERR",
        LOAD_ACTIVE_MONTHS = "LOAD_ACTIVE_MONTHS",
        LOAD_ACTIVE_MONTHS_OK = "LOAD_ACTIVE_MONTH_OK";
        LOAD_ACTIVE_MONTHS_ERR = "LOAD_ACTIVE_MONTHS_ERR",
        LOAD_MENU = "LOAD_MENU",
        LOAD_MENU_OK = "LOAD_MENU_OK",
        LOAD_MENU_ERR = "LOAD_MENU_ERR"
    };
}