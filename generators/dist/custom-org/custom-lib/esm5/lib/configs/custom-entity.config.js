/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { plainToClass } from "class-transformer";
import { ProviderActionEnum } from "ngx-repository";
import { CustomEntity } from "../models/custom-entity";
/** @type {?} */
export var DEFAULT_CUSTOM_ENTITIES_CONFIG = {
    name: "custom_entity",
    pluralName: "custom_entities",
    autoload: true,
    paginationMeta: {
        perPage: 5
    },
    actionOptions: {
        responseData: (/**
         * @param {?} data
         * @param {?} action
         * @return {?}
         */
        function (data, action) {
            if (action === ProviderActionEnum.Delete) {
                return true;
            }
            else {
                if (action === ProviderActionEnum.LoadAll) {
                    return plainToClass(CustomEntity, data && data.body && data.body.customEntities);
                }
                else {
                    return plainToClass(CustomEntity, data && data.body && data.body.customEntity);
                }
            }
        }),
        responsePaginationMeta: (/**
         * @param {?} data
         * @param {?} action
         * @return {?}
         */
        function (data, action) {
            return {
                totalResults: data && data.body && data.body.meta && data.body.meta.totalResults,
                perPage: undefined
            };
        })
    },
    restOptions: {
        limitQueryParam: "per_page",
        pageQueryParam: "cur_page",
        searchTextQueryParam: "q"
    }
};
/** @type {?} */
export var CUSTOM_ENTITIES_CONFIG_TOKEN = "CustomEntitiesConfig";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZ3MvY3VzdG9tLWVudGl0eS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsa0JBQWtCLEVBQ25CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUV2RCxNQUFNLEtBQU8sOEJBQThCLEdBRXZDO0lBQ0YsSUFBSSxFQUFFLGVBQWU7SUFDckIsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QixRQUFRLEVBQUUsSUFBSTtJQUNkLGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxhQUFhLEVBQUU7UUFDYixZQUFZOzs7OztRQUFFLFVBQUMsSUFBUyxFQUFFLE1BQTBCO1lBQ2xELElBQUksTUFBTSxLQUFLLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtnQkFDeEMsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxJQUFJLE1BQU0sS0FBSyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pDLE9BQU8sWUFBWSxDQUNqQixZQUFZLEVBQ1osSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQzlDLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxZQUFZLENBQ2pCLFlBQVksRUFDWixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FDNUMsQ0FBQztpQkFDSDthQUNGO1FBQ0gsQ0FBQyxDQUFBO1FBQ0Qsc0JBQXNCOzs7OztRQUFFLFVBQ3RCLElBQVMsRUFDVCxNQUEwQjtZQUUxQixPQUFPO2dCQUNMLFlBQVksRUFDVixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUNwRSxPQUFPLEVBQUUsU0FBUzthQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFBO0tBQ0Y7SUFDRCxXQUFXLEVBQUU7UUFDWCxlQUFlLEVBQUUsVUFBVTtRQUMzQixjQUFjLEVBQUUsVUFBVTtRQUMxQixvQkFBb0IsRUFBRSxHQUFHO0tBQzFCO0NBQ0Y7O0FBQ0QsTUFBTSxLQUFPLDRCQUE0QixHQUFHLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYWluVG9DbGFzcyB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lclwiO1xuaW1wb3J0IHtcbiAgSVJlc3RQcm92aWRlck9wdGlvbnMsXG4gIFBhZ2luYXRpb25NZXRhLFxuICBQcm92aWRlckFjdGlvbkVudW1cbn0gZnJvbSBcIm5neC1yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdHkgfSBmcm9tIFwiLi4vbW9kZWxzL2N1c3RvbS1lbnRpdHlcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ1VTVE9NX0VOVElUSUVTX0NPTkZJRzogSVJlc3RQcm92aWRlck9wdGlvbnM8XG4gIEN1c3RvbUVudGl0eVxuPiA9IHtcbiAgbmFtZTogXCJjdXN0b21fZW50aXR5XCIsXG4gIHBsdXJhbE5hbWU6IFwiY3VzdG9tX2VudGl0aWVzXCIsXG4gIGF1dG9sb2FkOiB0cnVlLFxuICBwYWdpbmF0aW9uTWV0YToge1xuICAgIHBlclBhZ2U6IDVcbiAgfSxcbiAgYWN0aW9uT3B0aW9uczoge1xuICAgIHJlc3BvbnNlRGF0YTogKGRhdGE6IGFueSwgYWN0aW9uOiBQcm92aWRlckFjdGlvbkVudW0pID0+IHtcbiAgICAgIGlmIChhY3Rpb24gPT09IFByb3ZpZGVyQWN0aW9uRW51bS5EZWxldGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBQcm92aWRlckFjdGlvbkVudW0uTG9hZEFsbCkge1xuICAgICAgICAgIHJldHVybiBwbGFpblRvQ2xhc3MoXG4gICAgICAgICAgICBDdXN0b21FbnRpdHksXG4gICAgICAgICAgICBkYXRhICYmIGRhdGEuYm9keSAmJiBkYXRhLmJvZHkuY3VzdG9tRW50aXRpZXNcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwbGFpblRvQ2xhc3MoXG4gICAgICAgICAgICBDdXN0b21FbnRpdHksXG4gICAgICAgICAgICBkYXRhICYmIGRhdGEuYm9keSAmJiBkYXRhLmJvZHkuY3VzdG9tRW50aXR5XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzcG9uc2VQYWdpbmF0aW9uTWV0YTogKFxuICAgICAgZGF0YTogYW55LFxuICAgICAgYWN0aW9uOiBQcm92aWRlckFjdGlvbkVudW1cbiAgICApOiBQYWdpbmF0aW9uTWV0YSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3RhbFJlc3VsdHM6XG4gICAgICAgICAgZGF0YSAmJiBkYXRhLmJvZHkgJiYgZGF0YS5ib2R5Lm1ldGEgJiYgZGF0YS5ib2R5Lm1ldGEudG90YWxSZXN1bHRzLFxuICAgICAgICBwZXJQYWdlOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICByZXN0T3B0aW9uczoge1xuICAgIGxpbWl0UXVlcnlQYXJhbTogXCJwZXJfcGFnZVwiLFxuICAgIHBhZ2VRdWVyeVBhcmFtOiBcImN1cl9wYWdlXCIsXG4gICAgc2VhcmNoVGV4dFF1ZXJ5UGFyYW06IFwicVwiXG4gIH1cbn07XG5leHBvcnQgY29uc3QgQ1VTVE9NX0VOVElUSUVTX0NPTkZJR19UT0tFTiA9IFwiQ3VzdG9tRW50aXRpZXNDb25maWdcIjtcbiJdfQ==